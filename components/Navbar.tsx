import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Dropdown } from "./Dropdown";

const Navbar = () => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed z-10 flex h-fit w-screen flex-col  bg-black px-4 text-white md:flex-row md:justify-between ">
      <div className="flex  justify-between  md:w-fit">
        {isOpen ? (
          <AiOutlineClose
            className="m-3 h-7  w-7 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <AiOutlineMenu
            className="m-3 h-7  w-7 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
        <Link href="/">
          <h1 className=" w-[30vw] p-3 text-left text-2xl md:w-fit">
            e-Kirana
          </h1>
        </Link>

        <div className="flex w-fit flex-row md:hidden ">
          <button className="button md:w-24 ">
            <Link href="/login">Login</Link>
          </button>
          <button className="button md:w-24 ">
            <Link href="/signup">SignUp</Link>
          </button>
        </div>
      </div>

      <Dropdown isOpen={isOpen} />

      <div className=" hidden w-fit md:flex">
        <Link href="/login">
          <button className="button md:w-24 ">Login</button>
        </Link>
        <Link href="/signup">
          <button className="button md:w-24 ">SignUp</button>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
