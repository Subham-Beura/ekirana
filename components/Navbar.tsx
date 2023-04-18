import Link from "next/link";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";
import { useEffect, useState } from "react";
import { Dropdown } from "./Dropdown";

const Navbar = () => {
  let [isOpen, setIsOpen] = useState(false);
  const transparent =
    "bg-gradient-to-b from-[#00000088] to-transparent text-white";
  const white = "bg-white text-black";
  let [navBG, setNavBG] = useState<typeof white | typeof transparent>(
    transparent
  );

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      setNavBG(show ? white : transparent);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed z-10 flex h-fit  min-h-[50px] w-screen flex-col text-white ${
        isOpen ? "bg-white text-black" : navBG
      }  md:flex-row  md:justify-between `}
    >
      <div className="relative flex  h-[50px] items-center justify-center  md:w-fit">
        {isOpen ? (
          <AiOutlineClose
            className="absolute left-0  my-3 mx-2 h-5 w-5 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <AiOutlineMenu
            className="absolute left-0 my-2 mx-2 h-7 w-7 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
        <Link href="/" className="flex h-[50px] items-center">
          <h1 className=" h-fit  w-fit text-center font-fancyFont text-3xl font-bold  md:w-fit">
            utsav
          </h1>
        </Link>

        <div className="absolute right-0 flex h-[50px] w-20 flex-row items-center justify-around md:hidden ">
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
