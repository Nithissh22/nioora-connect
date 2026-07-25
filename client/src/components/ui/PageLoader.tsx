import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_URL = "/logo-loader.png";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [phase, setPhase] = useState<"fixing" | "relaxing" | "done">("fixing");

  useEffect(() => {
    // Phase 1: Fixing (0s to 1.8s) - High energy, mechanical
    const t1 = setTimeout(() => {
      setPhase("relaxing");
    }, 1800);

    // Phase 2: Relaxing (1.8s to 4.0s) - Calm, ethereal
    const t2 = setTimeout(() => {
      setPhase("done");
      setIsLoading(false);
    }, 4000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="repair-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)", transition: { duration: 1.2, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center pointer-events-none overflow-hidden bg-slate-950"
        >
          {/* Dynamic Backgrounds based on phase */}
          
          {/* Fixing Background: High-tech grid & mechanical feel */}
          <AnimatePresence>
            {phase === "fixing" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.8 } }}
                className="absolute inset-0"
              >
                {/* Tech Grid */}
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(59,130,246,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.3)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_20%,transparent_100%)]" />
                
                {/* Scanning Laser Background effect */}
                <motion.div 
                  initial={{ top: "-10%" }}
                  animate={{ top: "110%" }}
                  transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
                  className="absolute left-0 w-full h-32 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Relaxing Background: Soft, warm, ethereal glow */}
          <AnimatePresence>
            {phase === "relaxing" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0"
              >
                {/* Smooth center glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_60%)]" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Visual Centerpiece */}
          <div className="relative flex items-center justify-center w-64 h-64 mb-12">
            
            {/* The Logo */}
            <motion.div
              animate={{ 
                scale: phase === "relaxing" ? 1.05 : 1, 
                filter: phase === "relaxing" ? "drop-shadow(0px 0px 25px rgba(59,130,246,0.6))" : "drop-shadow(0px 0px 0px rgba(59,130,246,0))"
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="relative z-20 w-28 h-28 md:w-36 md:h-36"
            >
              <img src={LOGO_URL} alt="Nioora" className="w-full h-full object-contain relative z-10" />
            </motion.div>

            {/* Phase 1: Mechanical Rings (representing fixing/engineering) */}
            <AnimatePresence>
              {phase === "fixing" && (
                <>
                  <motion.div
                    key="outer-gear"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    exit={{ opacity: 0, scale: 1.2, transition: { duration: 0.5 } }}
                    transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                    className="absolute inset-2 border-[4px] border-dashed border-blue-500/40 rounded-full z-0"
                  />
                  <motion.div
                    key="inner-gear"
                    initial={{ rotate: 360 }}
                    animate={{ rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.5 } }}
                    transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                    className="absolute inset-8 border-[2px] border-dashed border-white/30 rounded-full z-0"
                  />
                  {/* Scanner line over logo */}
                  <motion.div
                    initial={{ top: "0%" }}
                    animate={{ top: "100%" }}
                    transition={{ duration: 0.8, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
                    className="absolute left-10 right-10 h-[2px] bg-blue-400 shadow-[0_0_8px_#60a5fa] z-30"
                  />
                </>
              )}
            </AnimatePresence>

            {/* Phase 2: Zen Ripples (representing relaxation/calm) */}
            <AnimatePresence>
              {phase === "relaxing" && (
                <>
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={`ripple-${i}`}
                      initial={{ opacity: 0.8, scale: 0.5 }}
                      animate={{ opacity: 0, scale: 2 }}
                      transition={{ 
                        duration: 2.5, 
                        ease: "easeOut", 
                        repeat: Infinity,
                        delay: i * 0.8 
                      }}
                      className="absolute inset-0 rounded-full bg-blue-500/20 z-0"
                    />
                  ))}
                </>
              )}
            </AnimatePresence>
          </div>

          {/* The Text Container */}
          <div className="h-24 flex flex-col items-center justify-center relative overflow-visible">
            
            {/* WE FIX. */}
            <AnimatePresence>
              {phase === "fixing" && (
                <motion.div
                  key="text-fix"
                  initial={{ scale: 1.5, opacity: 0, filter: "blur(10px)" }}
                  animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -20, opacity: 0, filter: "blur(10px)", transition: { duration: 0.4 } }}
                  transition={{ type: "spring", stiffness: 150, damping: 10 }}
                  className="absolute text-5xl md:text-6xl font-heading font-black tracking-widest text-white uppercase"
                  style={{ textShadow: "0px 4px 20px rgba(59,130,246,0.5)" }}
                >
                  <span className="text-blue-500">WE</span> FIX.
                </motion.div>
              )}
            </AnimatePresence>

            {/* YOU RELAX. */}
            <AnimatePresence>
              {phase === "relaxing" && (
                <motion.div
                  key="text-relax"
                  initial={{ y: 30, opacity: 0, filter: "blur(10px)", letterSpacing: "0.1em" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)", letterSpacing: "0.3em" }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="absolute text-3xl md:text-4xl font-sans font-light text-blue-50 uppercase whitespace-nowrap"
                >
                  YOU <span className="font-semibold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">RELAX.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
