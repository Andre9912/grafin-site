import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Advantages from "@/components/Advantages";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Reservation from "@/components/Reservation";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Advantages />
      <About />
      <Menu />
      <Events />
      <Gallery />
      <Reviews />
      <Reservation />
      <Contacts />
      <Footer />
    </main>
  );
}
