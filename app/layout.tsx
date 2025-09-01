export const metadata = {
  title: "KAPment – Learn. Grow. Connect.",
  description: "KAPment: Gen-Z friendly education platform for 1:1 teachers, study buddies, community spaces, and smart recommendations.",
  icons: { icon: "/favicon.ico" }
};

import "./globals.css";
import Header from "./components/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-glow">
        <Header />
        {children}
      </body>
    </html>
  );
}
