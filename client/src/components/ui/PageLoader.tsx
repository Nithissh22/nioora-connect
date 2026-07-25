import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_URL = "/logo-loader.png";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 3 seconds for the full cinematic experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader-container"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden pointer-events-none"
        >
          {/* LEFT CURTAIN */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 left-0 w-1/2 h-full bg-[#050A1F] border-r border-white/5 z-0"
          />
          {/* RIGHT CURTAIN */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 right-0 w-1/2 h-full bg-[#050A1F] border-l border-white/5 z-0"
          />

          {/* DYNAMIC GLOW BACKGROUND */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.4, scale: 1.5 }}
            exit={{ opacity: 0, scale: 2 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="absolute w-[800px] h-[800px] rounded-full bg-blue-600/20 blur-[120px] z-0"
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* LOGO REVEAL & HOVER */}
            <motion.div
              initial={{ scale: 2, filter: "blur(20px)", opacity: 0, y: 20 }}
              animate={{ scale: 1, filter: "blur(0px)", opacity: 1, y: 0 }}
              exit={{ scale: 0.5, filter: "blur(10px)", opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-40 h-40 md:w-48 md:h-48 flex items-center justify-center"
            >
              {/* Expanding Ripple Rings */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 2, opacity: [0, 0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                className="absolute inset-0 rounded-full border border-blue-400/30"
              />
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 2.5, opacity: [0, 0.3, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 1 }}
                className="absolute inset-0 rounded-full border border-blue-300/20"
              />
              
              {/* Floating Logo */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full"
              >
                <img
                  src={LOGO_URL}
                  alt="Nioora Logo"
                  className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]"
                />
                
                {/* Light Sweep Effect over the logo */}
                <motion.div 
                  initial={{ x: "-150%", skewX: "-20deg" }}
                  animate={{ x: "150%", skewX: "-20deg" }}
                  transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent mix-blend-overlay"
                  style={{ maskImage: `url(${LOGO_URL})`, maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center" }}
                />
              </motion.div>
            </motion.div>

            {/* CINEMATIC TYPOGRAPHY */}
            <motion.div
              initial={{ letterSpacing: "1em", opacity: 0, filter: "blur(10px)", y: 20 }}
              animate={{ letterSpacing: "0.25em", opacity: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white text-3xl md:text-4xl font-extrabold font-sans uppercase relative left-[0.125em]"
            >
              Nioora
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.6, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-blue-200 text-xs md:text-sm tracking-[0.4em] mt-3 font-light uppercase"
            >
              Connecting Services
            </motion.div>

            {/* HIGH-TECH SPLIT PROGRESS BAR */}
            <div className="mt-12 w-64 h-[1px] bg-white/5 relative flex justify-center items-center">
              {/* Left Bar */}
              <motion.div
                initial={{ width: "0%", opacity: 0 }}
                animate={{ width: "50%", opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, delay: 0.8, ease: "circOut" }}
                className="absolute right-1/2 h-full bg-gradient-to-l from-blue-400 to-transparent shadow-[0_0_15px_rgba(96,165,250,0.8)]"
              />
              {/* Right Bar */}
              <motion.div
                initial={{ width: "0%", opacity: 0 }}
                animate={{ width: "50%", opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, delay: 0.8, ease: "circOut" }}
                className="absolute left-1/2 h-full bg-gradient-to-r from-blue-400 to-transparent shadow-[0_0_15px_rgba(96,165,250,0.8)]"
              />
              {/* Center Glowing Dot */}
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 1] }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_white] z-10"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
