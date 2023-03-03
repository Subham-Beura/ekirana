import Link from "next/link";

export function Dropdown(props: { isOpen: boolean }) {
  return (
    <ul
      className={`${
        props.isOpen ? "h-screen" : "h-0"
      }   mx-10 w-[100vw]  items-center justify-between overflow-hidden px-3  md:flex md:w-[50vw]  `}
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
  );
}
