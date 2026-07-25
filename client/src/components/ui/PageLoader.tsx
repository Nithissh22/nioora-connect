import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_URL = "/logo-loader.png";

// Apple-style ultra-smooth custom easing curve
const premiumEase = [0.16, 1, 0.3, 1];

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [step, setStep] = useState<"dot" | "line" | "we-fix" | "you-relax" | "reveal">("dot");

  useEffect(() => {
    const sequence = async () => {
      // Step 1: Dot expands to Line
      setTimeout(() => setStep("line"), 200);
      
      // Step 2: Line opens to reveal WE FIX
      setTimeout(() => setStep("we-fix"), 800);
      
      // Step 3: WE FIX rolls to YOU RELAX
      setTimeout(() => setStep("you-relax"), 2200);
      
      // Step 4: Window fully expands to reveal site
      setTimeout(() => setStep("reveal"), 3800);
      
      // End loader completely
      setTimeout(() => setIsLoading(false), 4600);
    };
    
    sequence();
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="minimalist-loader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center pointer-events-none bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: premiumEase } }}
        >
          
          {/* The Expanding Letterbox Window */}
          <motion.div
            className="absolute inset-0 flex flex-col justify-center overflow-hidden"
            initial={{ height: "0px" }}
            animate={{ 
              height: step === "reveal" ? "100vh" : 
                      step === "we-fix" || step === "you-relax" ? "240px" : "0px",
              opacity: step === "reveal" ? 0 : 1
            }}
            transition={{ duration: 1.2, ease: premiumEase }}
          >
            {/* Dark background inside the slit */}
            <div className="absolute inset-0 bg-[#050505] flex items-center justify-center">
              
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                
                {/* The Logo (Small, premium placement) */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: step === "we-fix" || step === "you-relax" ? 1 : 0, 
                    y: step === "we-fix" || step === "you-relax" ? -40 : 10 
                  }}
                  transition={{ duration: 1, ease: premiumEase, delay: 0.2 }}
                  className="absolute"
                >
                  <img src={LOGO_URL} alt="Nioora" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                </motion.div>

                {/* Typography Container (Masked for the rolling effect) */}
                <div className="overflow-hidden h-[80px] mt-16 relative flex items-center justify-center w-full">
                  
                  {/* WE FIX. */}
                  <motion.div
                    className="absolute text-3xl md:text-5xl font-heading font-medium tracking-[0.2em] text-white uppercase whitespace-nowrap"
                    initial={{ y: "100%" }}
                    animate={{ 
                      y: step === "we-fix" ? "0%" : step === "you-relax" || step === "reveal" ? "-100%" : "100%",
                      opacity: step === "we-fix" ? 1 : 0
                    }}
                    transition={{ duration: 1, ease: premiumEase }}
                  >
                    WE FIX.
                  </motion.div>

                  {/* YOU RELAX. */}
                  <motion.div
                    className="absolute text-3xl md:text-5xl font-heading font-medium tracking-[0.2em] text-slate-400 uppercase whitespace-nowrap"
                    initial={{ y: "100%" }}
                    animate={{ 
                      y: step === "you-relax" ? "0%" : step === "reveal" ? "-100%" : "100%",
                      opacity: step === "you-relax" ? 1 : 0
                    }}
                    transition={{ duration: 1, ease: premiumEase }}
                  >
                    YOU RELAX.
                  </motion.div>

                </div>
              </div>
            </div>
          </motion.div>

          {/* The Laser Line (Top edge of the letterbox) */}
          <motion.div
            className="absolute bg-white z-10 shadow-[0_0_20px_rgba(255,255,255,0.8)]"
            initial={{ width: "4px", height: "4px", borderRadius: "4px" }}
            animate={{ 
              width: step === "line" || step === "we-fix" || step === "you-relax" ? "100vw" : step === "reveal" ? "100vw" : "4px",
              height: step === "line" || step === "we-fix" || step === "you-relax" ? "1px" : "4px",
              opacity: step === "reveal" ? 0 : 1,
              top: step === "we-fix" || step === "you-relax" ? "calc(50% - 120px)" : step === "reveal" ? "0%" : "50%"
            }}
            transition={{ duration: 1.2, ease: premiumEase }}
          />
          
          {/* The Laser Line (Bottom edge of the letterbox) */}
          <motion.div
            className="absolute bg-white z-10 shadow-[0_0_20px_rgba(255,255,255,0.8)] hidden md:block"
            initial={{ width: "0vw", height: "1px" }}
            animate={{ 
              width: step === "we-fix" || step === "you-relax" ? "100vw" : step === "reveal" ? "100vw" : "0vw",
              opacity: step === "reveal" ? 0 : step === "we-fix" || step === "you-relax" ? 1 : 0,
              top: step === "we-fix" || step === "you-relax" ? "calc(50% + 120px)" : step === "reveal" ? "100%" : "50%"
            }}
            transition={{ duration: 1.2, ease: premiumEase }}
          />

        </motion.div>
      )}
    </AnimatePresence>
  );
}
