import Footer from "../components/Footer";
import Featured from "../components/Home/Featured";
import Hero from "../components/Home/Hero";
import Navbar from "../components/HomeNavbar";
import Message from "../components/Home/Message";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-fancy box-border flex  flex-col ">
      <div className="flex h-screen flex-col">
        <Navbar />
        {/* <Filter /> */}
        <Hero />
      </div>
      <Message />
      <Featured />
      <section className="h-fit bg-white px-2 md:mx-auto  md:flex md:h-full md:w-[70vw] md:flex-row">
        <div className="flex h-[40vh] flex-col items-center justify-center space-y-7 text-center  text-fabric md:my-auto md:w-[50vw]">
          <p className="text-2xl">Our ethnic fabrics are made up of</p>
          <span className="text-5xl">80-100%</span>
          <span>organic materials</span>
        </div>
        <hr />
        <div className="flex h-fit flex-col items-center space-y-8 py-20 text-center  text-fabric  md:w-[50vw]">
          <h4 className="text-3xl font-bold">Sustainably produced</h4>
          <h6 className=" text-sm ">REDUCE, REUSE, REPAIR, RECYCLE</h6>
          <p className="w-72">
            Further on, 95% of this are Bluesign certified – which guarantees
            that harmful substances are eliminated, natural resources are
            managed responsibly, water, air emissions and wastewater are
            continuously being reduced and those actions in general supports a
            lowest possible ecological footprint and safety for people involved.
          </p>
          <Link className="underline-offset-3  text-sm underline" href="#">
            LEARN MORE
          </Link>
        </div>
      </section>
      <section className="flex h-[70vh] flex-col bg-black text-center text-white">
        <h4>100% cotton</h4>
        <p>EXTREME </p>
      </section>
      <section className=" items-center md:flex md:justify-around">
        <div className=" my-5 h-[40vh] p-5 shadow  md:w-[30vw]">New store</div>
        <div className=" my-5 h-[40vh] p-5 shadow  md:w-[30vw]">
          Event in bbsr
        </div>
        <div className=" my-5 h-[40vh] p-5 shadow  md:w-[30vw]">
          Event in bbsr
        </div>
      </section>
      <section className="item flex h-[50vh] flex-col justify-center space-y-5 bg-beige px-5 text-center">
        <h4>Be First In Line</h4>
        <p>
          Keep up to date on product launches and be first in line for limited
          edition pieces, collabs and more. Subscribe to our newsletter and we
          got you covered.
        </p>
        <input
          type="text"
          placeholder="EMAIL"
          className="mx-auto w-[30vw] px-2 py-3 shadow"
        />
        <button>SIGN UP</button>
      </section>
      <Footer />
    </div>
  );
}
