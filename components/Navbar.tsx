import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-[7svh]  flex-col items-center justify-start bg-black px-4 text-white md:flex-row md:justify-between  ">
      <div className="flex w-[100vw] justify-between  md:w-fit">
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
      </div>
      <ul
        className={`${
          isOpen ? "h-fit" : "h-0"
        }  mx-10 w-[100vw]  items-center justify-between overflow-hidden px-3  md:flex md:w-[50vw]  `}
      >
        <Link href={"/"} className="menu-button">
          <li>Home</li>
        </Link>
        <Link href={"/orders"} className="menu-button">
          <li>My Orders</li>
        </Link>
        <Link href={"/cart"} className="menu-button">
          <li>My Cart</li>
        </Link>
      </ul>
      <div className=" hidden w-fit border border-indigo-50 md:flex">
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
