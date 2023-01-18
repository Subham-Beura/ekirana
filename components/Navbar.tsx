import Link from "next/link"

const Navbar = () => {
    return (
        <div className="md:h-20  bg-violet-700 text-white px-4 flex justify-between items-center ">
            <h1 className="text-2xl">e-Kirana</h1>
            <ul className=" hidden md:flex w-[50vw] mx-10  justify-between items-center  ">
                <Link href={"#"} className="boprder-2 px-5  py-1  border-b-2 text-center"><li>Home</li></Link>
                <Link href={"#"} className="boprder-2 px-5  py-1  border-b-2 text-center"><li>My Orders</li></Link>
                <Link href={"#"} className="boprder-2 px-5  py-1  border-b-2 text-center"><li>My Cart</li></Link>
            </ul>
            <div>
                <button className="button md:w-24 ">Login</button>
                <button className="button md:w-24 ">SignUp</button>

            </div>
        </div>
    )

}
export default Navbar