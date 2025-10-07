import Hero from "./component/hero/hero";
import Navbar from "./component/navbar/navbar";
import Testimonials from "./component/testimonials/testimonials";
import Product from "./component/product/features";
import Footer from "./component/footer/footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Product />
      <Testimonials />
      <Footer />
    </>
  );
}