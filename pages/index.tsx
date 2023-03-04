import Filter from "../components/Home/Filter";
import Footer from "../components/Footer";
import Grid from "../components/Home/Grid";
import Hero from "../components/Home/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="box-border flex flex-col  bg-teal-300 font-fancy   ">
      <div className="flex h-screen flex-col">
        <Navbar />
        {/* <Filter /> */}
        <Hero />
      </div>
      <Grid />
      <Footer />
    </div>
  );
}
