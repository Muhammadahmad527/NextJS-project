import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Story from "./components/Story";
import Setup from "./components/Setup";
import CustomCursor from "./components/Cursor";
import Gallery from "./components/Gallery";
import Loader from "./components/Loader";
import Review from "./components/Review";
import Footer from "./components/Footer";
import Top from "./components/Top";

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Story />
      <Setup />
      <CustomCursor />
      <Gallery />
      <Loader />
      <Review />
      <Footer />
      <Top />
    </>
  );
}
