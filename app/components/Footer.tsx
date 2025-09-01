export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-night/60 py-10">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-white/70">
            © {new Date().getFullYear()} KAPment — The state of growth, learning & improvement.
          </div>

          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" className="btn h-10 px-4">Instagram</a>
            <a href="https://x.com" target="_blank" className="btn h-10 px-4">Twitter/X</a>
            <a href="https://www.linkedin.com" target="_blank" className="btn h-10 px-4">LinkedIn</a>
            <a href="https://youtube.com" target="_blank" className="btn h-10 px-4">YouTube</a>
            <a href="https://discord.com" target="_blank" className="btn h-10 px-4">Discord</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
