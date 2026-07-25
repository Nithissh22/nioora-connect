import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Custom easings matching GSAP's power curves
const power2Out = [0.165, 0.84, 0.44, 1];
const power3Out = [0.215, 0.61, 0.355, 1];

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [step, setStep] = useState<"build" | "engage" | "text" | "done">("build");

  useEffect(() => {
    // 0.0 - 3.6s: Build phase (Teeth, Ring, N strokes)
    const t1 = setTimeout(() => setStep("engage"), 3600);
    // 3.6 - 4.0s: Engagement moment (tiny shift)
    const t2 = setTimeout(() => setStep("text"), 4000);
    // 4.0 - 6.5s: Text reveal and confident hold, then end
    const t3 = setTimeout(() => {
      setStep("done");
      setIsLoading(false);
    }, 6500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  // 12 Gear Teeth coordinates around cx=50 cy=50, r=40
  const gearTeeth = Array.from({ length: 12 }).map((_, i) => {
    const angle = (i * 30 * Math.PI) / 180;
    const x = 50 + 38 * Math.cos(angle);
    const y = 50 + 38 * Math.sin(angle);
    return { x, y, rotate: i * 30 };
  });

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="precision-loader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center pointer-events-none bg-[#1A1712]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: power2Out } }}
        >
          {/* Main Logo Container */}
          <motion.div
            className="relative flex flex-col items-center justify-center"
            animate={
              step === "engage" || step === "text"
                ? { y: 2, scale: 0.99 } // The engagement click
                : { y: 0, scale: 1 }
            }
            transition={{ duration: 0.1, ease: power3Out }}
          >
            {/* SVG Logo Setup */}
            <div className="w-40 h-40 md:w-48 md:h-48 relative overflow-visible" style={{ perspective: "800px" }}>
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                
                {/* 1. Gear Teeth (0.0s - 1.2s) */}
                <g>
                  {gearTeeth.map((tooth, i) => (
                    <motion.rect
                      key={`tooth-${i}`}
                      x={tooth.x - 3}
                      y={tooth.y - 4}
                      width={6}
                      height={8}
                      fill="#C9973E"
                      style={{ originX: "50%", originY: "50%" }}
                      initial={{ opacity: 0, scale: 0, rotate: tooth.rotate }}
                      animate={{ opacity: 1, scale: 1, rotate: tooth.rotate }}
                      transition={{
                        duration: 0.4,
                        delay: i * 0.04, // 0.04s stagger
                        ease: power2Out,
                      }}
                    />
                  ))}
                </g>

                {/* 2. Gear Ring (1.2s - 2.4s) */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="30"
                  fill="none"
                  stroke="#C9973E"
                  strokeWidth="6"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 1.2, ease: power2Out }}
                />

                {/* 3. The "N" Strokes (2.4s - 3.6s) */}
                {/* We use motion.path with 3D tilt on the parent or path itself */}
                <g style={{ transformOrigin: "50% 50%" }}>
                  {/* Left Vertical */}
                  <motion.line
                    x1="32"
                    y1="25"
                    x2="32"
                    y2="75"
                    stroke="#7A2020"
                    strokeWidth="10"
                    strokeLinecap="square"
                    initial={{ pathLength: 0, rotateY: -10, scale: 1.03 }}
                    animate={{ pathLength: 1, rotateY: 0, scale: 1 }}
                    transition={{ duration: 0.4, delay: 2.4, ease: power3Out }}
                  />
                  {/* Diagonal */}
                  <motion.line
                    x1="32"
                    y1="25"
                    x2="68"
                    y2="75"
                    stroke="#7A2020"
                    strokeWidth="10"
                    strokeLinecap="square"
                    initial={{ pathLength: 0, rotateY: -10, scale: 1.03 }}
                    animate={{ pathLength: 1, rotateY: 0, scale: 1 }}
                    transition={{ duration: 0.4, delay: 2.8, ease: power3Out }}
                  />
                  {/* Right Vertical */}
                  <motion.line
                    x1="68"
                    y1="75"
                    x2="68"
                    y2="25"
                    stroke="#7A2020"
                    strokeWidth="10"
                    strokeLinecap="square"
                    initial={{ pathLength: 0, rotateY: -10, scale: 1.03 }}
                    animate={{ pathLength: 1, rotateY: 0, scale: 1 }}
                    transition={{ duration: 0.4, delay: 3.2, ease: power3Out }}
                  />
                </g>
              </svg>
            </div>

            {/* Tagline Reveal (4.0s - 5.2s) */}
            <div className="absolute top-[110%] w-full flex flex-col items-center justify-center mt-4">
              <AnimatePresence>
                {(step === "text" || step === "done") && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: power2Out }}
                      className="text-xl md:text-2xl font-sans font-medium tracking-[0.15em] text-[#7A2020] uppercase"
                    >
                      WE FIX.
                    </motion.div>
                    
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.2, ease: power2Out }}
                      className="w-16 h-[1px] bg-[#C9973E]/50 my-2"
                    />

                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4, ease: power2Out }}
                      className="text-xl md:text-2xl font-sans font-medium tracking-[0.15em] text-[#C9973E] uppercase"
                    >
                      YOU RELAX.
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
