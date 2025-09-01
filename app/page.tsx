import Starfield from "./components/Starfield";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Download from "./components/Download";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <main className="relative">
      <Starfield />
      <Hero />
      <Features />
      {/* faux anchors for login/signup if you connect auth later */}
      <section id="login" className="container py-6 text-center text-white/60">
        Already have an account? <span className="text-white">Login</span> (connect later).
      </section>
      <section id="signup" className="container -mt-6 pb-6 text-center text-white/60">
        New here? <span className="text-white">Sign up</span> (connect later).
      </section>
      <Download />
      <Footer />
    </main>
  );
}
