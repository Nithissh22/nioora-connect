import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_URL = "/logo-loader.png";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Keep the loader on screen for 2.5 seconds for the full cinematic effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            clipPath: "inset(0 0 100% 0)", 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0d1321] overflow-hidden"
        >
          {/* Subtle animated background gradients */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-full opacity-30"
            initial={{ backgroundPosition: "0% 0%" }}
            animate={{ backgroundPosition: "100% 100%" }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            style={{
              background: "radial-gradient(circle at center, rgba(37,99,235,0.15) 0%, transparent 60%)",
              backgroundSize: "200% 200%"
            }}
          />

          <div className="relative flex flex-col items-center">
            {/* Logo container with 3D flip reveal */}
            <motion.div
              initial={{ rotateY: 90, scale: 0.8, opacity: 0 }}
              animate={{ rotateY: 0, scale: 1, opacity: 1 }}
              transition={{ 
                duration: 1.2, 
                ease: [0.16, 1, 0.3, 1], 
                delay: 0.2 
              }}
              className="relative w-32 h-32 md:w-40 md:h-40 z-10"
            >
              {/* Glow behind the logo */}
              <motion.div 
                className="absolute inset-0 bg-white/20 blur-2xl rounded-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.2, opacity: 0.6 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              />
              <img 
                src={LOGO_URL} 
                alt="Nioora Logo" 
                className="w-full h-full object-contain drop-shadow-2xl relative z-10"
              />
            </motion.div>

            {/* Cinematic Text Reveal */}
            <motion.div 
              className="mt-8 flex space-x-1 overflow-hidden"
            >
              {"NIOORA".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.16, 1, 0.3, 1], 
                    delay: 0.6 + index * 0.05 
                  }}
                  className="text-white text-2xl md:text-3xl font-bold tracking-[0.3em] font-sans"
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 0.6 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-slate-400 text-xs md:text-sm tracking-[0.2em] mt-3 uppercase font-light"
            >
              Connecting Services
            </motion.div>

            {/* Elegant Progress Line */}
            <div className="mt-12 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.4 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
