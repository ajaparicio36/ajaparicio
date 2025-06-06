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
    "Portfolio of Anthony John Aparicio - Software Engineer, Web Developer, and UI/UX Designer specializing in full-stack development, mobile apps, and modern web technologies.",
  keywords: [
    "Anthony John Aparicio",
    "AJ Aparicio",
    "Software Engineer",
    "Web Developer",
    "Full Stack Developer",
    "Mobile App Developer",
    "TypeScript",
    "React",
    "Next.js",
    "Flutter",
    "Philippines",
  ],
  authors: [{ name: "Anthony John Aparicio" }],
  creator: "Anthony John Aparicio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ajaparicio.com", // Replace with your actual domain
    siteName: "AJ Aparicio Portfolio",
    title: "AJ Aparicio | Software Engineer & Web Developer",
    description:
      "Portfolio of Anthony John Aparicio - Software Engineer, Web Developer, and UI/UX Designer specializing in full-stack development, mobile apps, and modern web technologies.",
    images: [
      {
        url: "/og-image.png", // You'll need to create this image
        width: 1200,
        height: 630,
        alt: "AJ Aparicio - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AJ Aparicio | Software Engineer & Web Developer",
    description:
      "Portfolio of Anthony John Aparicio - Software Engineer, Web Developer, and UI/UX Designer",
    images: ["/og-image.png"],
    creator: "@ajaparicio36",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes if you have them
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ajaparicio.vercel.app" />
        <link rel="icon" href="/favicon.ico" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
            body {
              background-color: black !important;
              position: relative;
              min-height: 100vh;
              width: 100%;
              overflow-x: hidden;
            }
            
            /* Ensure background elements are visible */
            #root-background {
              z-index: -100 !important;
            }
          `,
          }}
        />
      </head>
      <body
        className={`${orbitron.variable} ${calSans.variable} ${roboto.variable} antialiased bg-background text-foreground font-roboto`}
      >
        {children}
      </body>
    </html>
  );
}
