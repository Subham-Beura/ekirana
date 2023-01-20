import Link from "next/link"

const Navbar = () => {
    return (
        <div className="md:h-20  bg-black text-white px-4 flex justify-between items-center ">
            <h1 className="text-2xl">e-Kirana</h1>
            <ul className=" hidden md:flex w-[50vw] mx-10  justify-between items-center  ">
                <Link href={"#"} className="menu-button"><li>Home</li></Link>
                <Link href={"#"} className="menu-button"><li>My Orders</li></Link>
                <Link href={"#"} className="menu-button"><li>My Cart</li></Link>
            </ul>
            <div>
                <button className="button md:w-24 "><Link href='./login'>Login</Link></button>
                <button className="button md:w-24 "><Link href="./signup">SignUp</Link></button>
            </div>
        </div>
    )
}
export default Navbar