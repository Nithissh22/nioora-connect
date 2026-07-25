import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";

const LOGO_URL = "/logo-loader.png";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Motion values for our custom counter
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    // Run the counter animation smoothly up to 100
    const controls = animate(count, 100, { 
      duration: 2.2, 
      ease: [0.25, 1, 0.5, 1] 
    });

    // Total loader lifespan
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    return () => {
      controls.stop();
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="pro-loader"
          // The background acts as a heavy glass frosted layer over the actual website
          initial={{ opacity: 1, backdropFilter: "blur(40px) brightness(0.1)" }}
          exit={{ 
            opacity: 0, 
            backdropFilter: "blur(0px) brightness(1)", 
            transition: { duration: 1, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center pointer-events-none bg-black/60"
        >
          {/* Main Logo Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ 
              scale: 2.5, 
              opacity: 0, 
              filter: "blur(10px)",
              transition: { duration: 0.8, ease: "anticipate" } 
            }}
            className="relative w-36 h-36 md:w-44 md:h-44 mb-8"
          >
            {/* The Skeleton / Silhouette (Dimmed grayscale version) */}
            <img
              src={LOGO_URL}
              alt="Logo Silhouette"
              className="absolute inset-0 w-full h-full object-contain opacity-20 grayscale brightness-50"
            />
            
            {/* The Fluid Fill Layer (Vibrant, masked from bottom to top) */}
            <motion.div
              className="absolute inset-0 w-full h-full"
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0% 0 0 0)" }}
              transition={{ duration: 2.2, ease: [0.25, 1, 0.5, 1] }}
            >
              <img
                src={LOGO_URL}
                alt="Logo Fill"
                className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
              />
              
              {/* Laser scanning line sitting exactly on the fill level */}
              <motion.div 
                className="absolute w-full h-[2px] bg-white shadow-[0_0_10px_#fff]"
                initial={{ top: "100%" }}
                animate={{ top: "0%" }}
                transition={{ duration: 2.2, ease: [0.25, 1, 0.5, 1] }}
              />
            </motion.div>
          </motion.div>

          {/* Minimalist Pro Typographic Counter */}
          <motion.div 
            exit={{ opacity: 0, y: 10, transition: { duration: 0.4 } }}
            className="absolute bottom-16 flex flex-col items-center gap-3"
          >
            <div className="flex items-center justify-between w-56 text-white/60 font-mono text-xs tracking-[0.2em] uppercase">
              <span>Initializing</span>
              <div className="flex text-white font-medium">
                <motion.span>{rounded}</motion.span>
                <span>%</span>
              </div>
            </div>
            
            {/* Ultra-thin architectural progress track */}
            <div className="w-56 h-[1px] bg-white/10 relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-white to-white"
                initial={{ width: "0%", left: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.2, ease: [0.25, 1, 0.5, 1] }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
