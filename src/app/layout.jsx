import "./globals.css";
import Providers from "./Providers";

export const metadata = {
  title: "Filmatic App | Home",
  description:
    "Movies beginner application made using Nextjs, React, Tailwind.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header*/}
          {children}
        </Providers>
      </body>
    </html>
  );
}
