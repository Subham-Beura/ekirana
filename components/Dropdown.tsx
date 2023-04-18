import Link from "next/link";

export function Dropdown(props: { isOpen: boolean }) {
  return (
    <ul
      className={`${
        props.isOpen ? "h-screen" : "h-0"
      }  z-10 mx-0 w-screen items-center  justify-between overflow-hidden bg-white px-0  text-black   `}
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
