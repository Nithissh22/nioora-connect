import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_URL = "/logo-loader.png";

// "Butter-smooth" cinematic easing for fades/transforms
const smoothEase = [0.25, 1, 0.5, 1];
// Smooth, consistent speed for drawing paths (avoids jerky starts)
const drawEase = [0.4, 0, 0.2, 1];
const gentleEngage = [0.34, 1.56, 0.64, 1];

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [step, setStep] = useState<"build" | "engage" | "text" | "done">("build");

  useEffect(() => {
    // 0.0 - 4.2s: Build phase (Teeth, Ring, N strokes)
    const t1 = setTimeout(() => setStep("engage"), 4200);
    // 4.2 - 4.8s: Engagement moment (mask floods to reveal full image)
    const t2 = setTimeout(() => setStep("text"), 4800);
    // 4.8 - 7.5s: Text reveal and confident hold, then end
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
                ? { y: 2, scale: 0.985 } 
                : { y: 0, scale: 1 }
            }
            transition={{ duration: 0.4, ease: gentleEngage }}
          >
            {/* SVG Logo Setup */}
            <div className="w-40 h-40 md:w-48 md:h-48 relative overflow-visible" style={{ perspective: "800px" }}>
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                
                <defs>
                  <mask id="precision-mask">
                    {/* 1. Gear Teeth */}
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
                            delay: i * 0.05,
                            ease: smoothEase,
                          }}
                        />
                      ))}
                    </g>

                    {/* 2. Gear Ring */}
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="30"
                      fill="none"
                      stroke="white"
                      initial={{ pathLength: 0, strokeWidth: 15 }}
                      animate={
                        step === "build" 
                          ? { pathLength: 1, strokeWidth: 15 } 
                          // Expand the stroke massively to seamlessly flood and reveal the whole image
                          : { pathLength: 1, strokeWidth: 150 }
                      }
                      transition={{ 
                        pathLength: { duration: 1.6, delay: 1.2, ease: drawEase },
                        strokeWidth: { duration: 1.0, ease: smoothEase } 
                      }}
                    />

                    {/* 3. The "N" Monogram */}
                    <g style={{ transformOrigin: "50% 50%" }}>
                      <motion.path
                        d="M 25 75 L 25 25 L 75 75 L 75 25"
                        fill="none"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, strokeWidth: 25 }}
                        animate={
                          step === "build" 
                            ? { pathLength: 1, strokeWidth: 25 } 
                            // Expand the stroke massively to seamlessly flood and reveal the whole image
                            : { pathLength: 1, strokeWidth: 200 }
                        }
                        transition={{ 
                          pathLength: { duration: 1.8, delay: 2.4, ease: drawEase },
                          strokeWidth: { duration: 1.0, ease: smoothEase }
                        }}
                      />
                    </g>
                  </mask>
                </defs>

                {/* Single Image Layer - Masked seamlessly */}
                <motion.image 
                  href={LOGO_URL} 
                  x="0" 
                  y="0" 
                  width="100" 
                  height="100" 
                  mask="url(#precision-mask)" 
                />
                
              </svg>
            </div>

            {/* Tagline Reveal */}
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
