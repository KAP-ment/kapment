"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-night/70 backdrop-blur">
      <div className="container flex h-14 items-center justify-between">
        <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}>
          <Link href="#top" className="flex items-center gap-3 no-underline">
            {/* logo */}
            <img src="/logo.svg" alt="KAPment" className="h-6 w-auto" />
          </Link>
        </motion.div>

        <nav className="flex items-center gap-3">
          <Link href="#download" className="btn btn-primary">Download</Link>
          {/* 3-dot / hamburger icon */}
          <button aria-label="Menu" className="btn h-10 w-10 p-0">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <circle cx="5" cy="12" r="2" fill="#fff" />
              <circle cx="12" cy="12" r="2" fill="#fff" />
              <circle cx="19" cy="12" r="2" fill="#fff" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}
