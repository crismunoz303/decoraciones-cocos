import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Decoraciones Coco's | Event Decor & Rentals",
  description:
    "Decoraciones Coco's creates memorable celebrations with event decor, tables, chairs, linens, centerpieces, canopies, and more.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
