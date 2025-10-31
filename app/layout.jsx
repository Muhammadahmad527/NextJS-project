import "../style/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Pizzaiolo Woodfire Pizza Catering | Sydney, Australia",
  description:
    "We provide authentic mobile woodfire pizza catering for parties, events, and weddings in Sydney.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
