import "../style/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CustomCursor from "./components/Cursor";
import Top from "./components/Top";


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
        <CustomCursor />
        <Top />
        <Footer />
      </body>
    </html>
  );
}
