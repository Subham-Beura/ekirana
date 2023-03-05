import Filter from "../components/Home/Filter";
import Footer from "../components/Footer";
import Grid from "../components/Home/Grid";
import Hero from "../components/Home/Hero";
import Navbar from "../components/Navbar";
import Message from "../components/Home/Message";

export default function Home() {
  return (
    <div className="font-fancy box-border flex  flex-col bg-teal-300   ">
      <div className="flex h-screen flex-col">
        <Navbar />
        {/* <Filter /> */}
        <Hero />
      </div>
      <Message />
      <Grid />
      <Footer />
    </div>
  );
}
