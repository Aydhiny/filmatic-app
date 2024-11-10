import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Filmatic App | Home",
  description: "Movies beginner application made using Nextjs, React, Tailwind.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header*/}
        <Header/>
        {/* Navbar*/}

        {/* SearchBox*/}
        {children}
      </body>
    </html>
  );
}
