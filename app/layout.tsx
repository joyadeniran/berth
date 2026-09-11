import type { Metadata } from "next";
import { DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-serif-google",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Berth Tech Agency | Pan-African Performance Marketing",
  description:
    "Data-backed, Africa-first performance marketing across Nigeria and South Africa. We build campaigns that convert, retain, and scale.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={dmSerifDisplay.variable}>
      <body>{children}</body>
    </html>
  );
}
