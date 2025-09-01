"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container relative z-10 flex flex-col items-center gap-10 py-16 md:flex-row md:justify-between md:py-24">
        {/* Left: feather + title */}
        <div className="max-w-xl">
          <div className="mb-6">
            <img src="/feather.svg" alt="Peacock Feather" className="w-40 opacity-90" />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-extrabold tracking-tight md:text-6xl"
          >
            KAPment<span className="text-neon">+</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-white/80 md:text-xl"
          >
            Learning. Growth. Connections. Powered by KAP.
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#login" className="btn btn-primary">Login</a>
            <a href="#signup" className="btn">Sign up</a>
          </div>
        </div>

        {/* Right: Robot */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative"
        >
          <img src="/robot.svg" alt="KAP Robot" className="w-56 md:w-72" />
          <motion.div
            className="absolute -right-4 -top-4 h-16 w-16 rounded-full border border-white/15"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
