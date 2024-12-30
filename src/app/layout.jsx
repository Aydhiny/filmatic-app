import "./globals.css";
import Providers from "./Providers";
import Footer from "../components/footer";
import Header from "@/components/Header";
import SearchBox from "@/components/SearchBox";
import Welcome from "../components/welcome";

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
          <Header />
          <Welcome />
          <SearchBox />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
