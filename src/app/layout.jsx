import "./globals.css";
import Providers from "./Providers";
import { SessionProvider } from 'next-auth/react';

export const metadata = {
  title: "Filmatic App | Home",
  description:
    "Movies beginner application made using Nextjs, React, Tailwind.",
};

export default function RootLayout({ children }) {
  return (
     <SessionProvider>
    <html lang="en">
      <body>
        <Providers>
          {/* Header*/}
          {children}
        </Providers>
      </body>
    </html>
    </SessionProvider>
  );
}
