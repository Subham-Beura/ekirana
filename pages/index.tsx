import Filter from "../components/Filter";
import Footer from "../components/Footer";
import Grid from "../components/Grid";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col bg-teal-300 box-border   ">
      <Navbar/>
      <Filter/>
      <Hero/>
      <Grid/>
      <Footer/>
    </div>
  )
}
