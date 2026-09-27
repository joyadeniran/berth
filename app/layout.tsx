import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Berth Tech Agency | Pan-African Performance Marketing",
  description:
    "Data-backed, Africa-first performance marketing across Nigeria and South Africa. We build campaigns that convert, retain, and scale.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
