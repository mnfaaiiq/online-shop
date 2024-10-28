import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";

export default function Page() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex flex-col">
        <Navbar />
        <Hero />
        <About />
        <Products />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}
