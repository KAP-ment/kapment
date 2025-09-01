"use client";
import { motion } from "framer-motion";

const blocks = [
  {
    title: "Find Teachers Easily",
    text: "One-on-one classes with trusted mentors, tailored to your goals.",
    emoji: "👩‍🏫"
  },
  {
    title: "Study Buddies & Groups",
    text: "Meet your study fam, chat, and learn together in real time.",
    emoji: "👥"
  },
  {
    title: "Interactive Spaces",
    text: "Posts, short videos, and community threads made for you.",
    emoji: "🎛️"
  },
  {
    title: "Smart Recommendations",
    text: "Your feed learns from your activity—no repeats of watched content.",
    emoji: "🧠"
  },
  {
    title: "Notes & Saves",
    text: "Bookmark, organize, and sync your learning across devices.",
    emoji: "📒"
  },
  {
    title: "Secure & Fast",
    text: "Privacy-first, optimized for low data usage and speed.",
    emoji: "⚡"
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-14 md:py-20">
      <div className="container">
        <h2 className="mb-8 text-center text-3xl font-bold md:mb-12 md:text-4xl">
          What KAPment does for you
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blocks.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="card"
            >
              <div className="text-3xl">{b.emoji}</div>
              <h3 className="mt-3 text-xl font-semibold">{b.title}</h3>
              <p className="mt-2 text-white/75">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
