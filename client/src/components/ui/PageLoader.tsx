import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_URL = "/logo-loader.png";

// "Butter-smooth" cinematic easing (Apple-style exponential decay)
const smoothEase = [0.25, 1, 0.5, 1];
const gentleEngage = [0.34, 1.56, 0.64, 1]; // Slight soft spring for the click

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [step, setStep] = useState<"build" | "engage" | "text" | "done">("build");

  useEffect(() => {
    // 0.0 - 4.2s: Build phase (Teeth, Ring, N strokes) - Extended for smoothness
    const t1 = setTimeout(() => setStep("engage"), 4200);
    // 4.2 - 4.6s: Engagement moment (tiny soft shift)
    const t2 = setTimeout(() => setStep("text"), 4600);
    // 4.6 - 7.5s: Text reveal and confident hold, then end
    const t3 = setTimeout(() => {
      setStep("done");
      setIsLoading(false);
    }, 7500);

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
          exit={{ opacity: 0, transition: { duration: 1.2, ease: smoothEase } }}
        >
          {/* Main Logo Container */}
          <motion.div
            className="relative flex flex-col items-center justify-center"
            animate={
              step === "engage" || step === "text"
                ? { y: 2, scale: 0.985 } // The engagement click
                : { y: 0, scale: 1 }
            }
            transition={{ duration: 0.4, ease: gentleEngage }}
          >
            {/* SVG Logo Setup - Using image masking for perfect fidelity */}
            <div className="w-40 h-40 md:w-48 md:h-48 relative overflow-visible" style={{ perspective: "800px" }}>
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                
                <defs>
                  {/* The mask defining the incredibly smooth drawing animation */}
                  <mask id="precision-mask">
                    {/* 1. Gear Teeth (0.0s - 1.5s) */}
                    <g>
                      {gearTeeth.map((tooth, i) => (
                        <motion.rect
                          key={`tooth-mask-${i}`}
                          x={tooth.x - 6}
                          y={tooth.y - 8}
                          width={12}
                          height={16}
                          fill="white"
                          style={{ originX: "50%", originY: "50%" }}
                          initial={{ opacity: 0, scale: 0, rotate: tooth.rotate }}
                          animate={{ opacity: 1, scale: 1, rotate: tooth.rotate }}
                          transition={{
                            duration: 0.8,
                            delay: i * 0.05, // Smooth 0.05s stagger
                            ease: smoothEase,
                          }}
                        />
                      ))}
                    </g>

                    {/* 2. Gear Ring (1.2s - 2.8s) */}
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="30"
                      fill="none"
                      stroke="white"
                      strokeWidth="15"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.6, delay: 1.2, ease: smoothEase }}
                    />

                    {/* 3. The "N" Monogram (2.4s - 4.2s) */}
                    <g style={{ transformOrigin: "50% 50%" }}>
                      <motion.path
                        d="M 25 75 L 25 25 L 75 75 L 75 25"
                        fill="none"
                        stroke="white"
                        strokeWidth="25"
                        strokeLinecap="square"
                        strokeLinejoin="miter"
                        strokeMiterlimit="10"
                        initial={{ pathLength: 0, rotateY: -10, scale: 1.03 }}
                        animate={{ pathLength: 1, rotateY: 0, scale: 1 }}
                        transition={{ duration: 1.8, delay: 2.4, ease: smoothEase }}
                      />
                    </g>
                  </mask>
                </defs>

                {/* The Unmasked Full Image (Fades in very softly at engagement for perfect final fidelity) */}
                <motion.image 
                  href={LOGO_URL} 
                  x="0" 
                  y="0" 
                  width="100" 
                  height="100" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: step === "engage" || step === "text" || step === "done" ? 1 : 0 }}
                  transition={{ duration: 1.2, ease: smoothEase }}
                />

                {/* The Masked Animated Image */}
                <motion.image 
                  href={LOGO_URL} 
                  x="0" 
                  y="0" 
                  width="100" 
                  height="100" 
                  mask="url(#precision-mask)" 
                  animate={{ opacity: step === "engage" || step === "text" || step === "done" ? 0 : 1 }}
                  transition={{ duration: 1.2, ease: smoothEase }}
                />
                
              </svg>
            </div>

            {/* Tagline Reveal (4.6s - 6.0s) */}
            <div className="absolute top-[110%] w-full flex flex-col items-center justify-center mt-4">
              <AnimatePresence>
                {(step === "text" || step === "done") && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.2, ease: smoothEase }}
                      className="text-xl md:text-2xl font-sans font-medium tracking-[0.15em] text-[#7A2020] uppercase"
                    >
                      WE FIX.
                    </motion.div>
                    
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1.2, delay: 0.2, ease: smoothEase }}
                      className="w-16 h-[1px] bg-[#C9973E]/50 my-2"
                    />

                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.2, delay: 0.4, ease: smoothEase }}
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
