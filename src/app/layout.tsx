import type { Metadata } from "next";
import NavBar from "./components/navbar";
import './globals.css';

export const metadata: Metadata = {
  title: "Rupak Chaulagain",
  description: "Rupak Chaulagain's awesome portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        {children}</body>
    </html>
  );
}
