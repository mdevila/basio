import type { Metadata } from "next";
import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/AppShell";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Basio Café and Restaurant | Restaurant • Events • Catering",
  description:
    "Experience Basio — a premier café and restaurant offering exceptional Filipino cuisine, event hosting, and professional catering services.",
  keywords: [
    "Basio",
    "restaurant",
    "café",
    "catering",
    "events",
    "Filipino cuisine",
    "Quezon City",
  ],
  openGraph: {
    title: "Basio Café and Restaurant",
    description:
      "Restaurant • Events • Catering — Where every meal tells a story.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${jakarta.variable}`}>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
