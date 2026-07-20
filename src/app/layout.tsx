import type { Metadata } from "next";
import { Ubuntu, Ubuntu_Mono, Merriweather } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const ubuntuMono = Ubuntu_Mono({
  variable: "--font-ubuntu-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["300", "400", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "James Zedd",
  description:
    "James Zedd — front-end developer specializing in JavaScript and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ubuntu.variable} ${ubuntuMono.variable} ${merriweather.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <Footer />
      </body>
    </html>
  );
}
