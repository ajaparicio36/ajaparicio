import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto } from "next/font/google";
import "./globals.css";

const orbitron = localFont({
  src: [
    {
      path: "../../public/fonts/Orbitron.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-orbitron-local",
});

const calSans = localFont({
  src: [
    {
      path: "../../public/fonts/CalSans.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-cal-sans-local",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "AJ Aparicio | Software Engineer & Web Developer",
  description:
    "Portfolio of Anthony John Aparicio - Software Engineer, Web Developer, and UI/UX Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${orbitron.variable} ${calSans.variable} ${roboto.variable} antialiased bg-background text-foreground font-roboto`}
      >
        {children}
      </body>
    </html>
  );
}
