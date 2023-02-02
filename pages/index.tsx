import Filter from "../components/Filter";
import Footer from "../components/Footer";
import Grid from "../components/Grid";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="box-border flex flex-col bg-teal-300   ">
      <Navbar />
      <Filter />
      <Hero />
      <Grid />
      <Footer />
    </div>
  );
}
