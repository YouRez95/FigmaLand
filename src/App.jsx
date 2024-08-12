import Card from "./components/Card";
import Contents from "./components/Contents";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Partners from "./components/Partners";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <main className="mx-auto bg-[#181818] overflow-x-hidden">
      <Home />
      <Features />
      <Contents />
      <Gallery />
      <Partners />
      <Testimonials />
      <Card />
      <Footer />
    </main>
  );
}
