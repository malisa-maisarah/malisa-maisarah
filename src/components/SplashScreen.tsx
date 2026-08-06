import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem("splash-seen");
    if (seen) {
      setShow(false);
      document.documentElement.classList.remove("splash-active");
      return;
    }
    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("splash-seen", "true");
      document.documentElement.classList.remove("splash-active");
    }, 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FAF9F6]"
        >
          <div className="text-center space-y-3">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-500"
            >
              Portfolio
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, type: "spring", bounce: 0.15 }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900"
            >
              Malisa Maisarah
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="w-12 h-0.5 bg-brand-500 mx-auto"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="text-sm text-slate-500 font-light"
            >
              Social Work Graduate
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
