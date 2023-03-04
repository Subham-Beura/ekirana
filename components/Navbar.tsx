import Link from "next/link";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";
import { useState } from "react";
import { Dropdown } from "./Dropdown";

const Navbar = () => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`fixed z-10 flex h-fit w-screen flex-col  ${
        isOpen
          ? "bg-white text-black"
          : "bg-gradient-to-b from-[#00000088] to-transparent text-white"
      } md:flex-row md:justify-between  `}
    >
      <div className="relative  flex justify-center  md:w-fit">
        {isOpen ? (
          <AiOutlineClose
            className="absolute left-0  my-3 mx-2 h-7 w-7 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <AiOutlineMenu
            className="absolute left-0 my-2 mx-2 h-7 w-7 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
        <Link href="/">
          <h1 className="mx-auto w-fit pt-2 text-center text-xl font-bold md:w-fit">
            USTAV
          </h1>
        </Link>

        <div className="absolute right-0 flex w-fit flex-row md:hidden ">
          <button className="button md:w-24 ">
            <AiOutlineSearch size={20} />
          </button>
          <button className="button md:w-24 ">
            <AiOutlineShoppingCart size={20} />
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
