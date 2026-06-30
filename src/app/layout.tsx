import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Paws for Change India | Animal Rescue & Adoption NGO",
  description:
    "We rescue, rehabilitate, and rehome abandoned animals across India. Join us in giving every paw a chance at a loving home.",
  openGraph: {
    title: "Paws for Change India | Animal Rescue & Adoption NGO",
    description:
      "We rescue, rehabilitate, and rehome abandoned animals across India. Join us in giving every paw a chance at a loving home.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable}`}
    >
      <body className="bg-background text-foreground antialiased">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
