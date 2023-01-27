import Link from "next/link"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from "react"

const Navbar = () => {
    let [isOpen, setIsOpen] = useState(false)

    return (
        <div className="h-fit md:h-20  bg-black text-white px-4 flex flex-col justify-start items-center md:flex-row md:justify-between  ">
            <div className="w-[100vw] md:w-fit flex  justify-between">
                <Link href='/'>
                    <h1 className=" w-[30vw] md:w-fit p-3 text-2xl text-left">
                        e-Kirana
                    </h1>
                </Link>
                <div className="w-fit flex flex-row md:hidden ">
                    <button className="button md:w-24 "><Link href='/login'>Login</Link></button>
                    <button className="button md:w-24 "><Link href="/signup">SignUp</Link></button>
                </div>
                {isOpen ?
                    <AiOutlineClose className="md:hidden w-7  h-7 m-3" onClick={() => setIsOpen(!isOpen)} />
                    :
                    <AiOutlineMenu className="md:hidden w-7  h-7 m-3" onClick={() => setIsOpen(!isOpen)} />
                }
            </div>
            <ul className={`${isOpen ? "block" : "hidden"}  h-fit md:flex w-[100vw] md:w-[50vw] mx-10 px-3  justify-between items-center  `}>
                <Link href={"/"} className="menu-button"><li>Home</li></Link>
                <Link href={"/orders"} className="menu-button"><li>My Orders</li></Link>
                <Link href={"/cart"} className="menu-button"><li>My Cart</li></Link>
            </ul>
            <div className="hidden md:block">
                <Link href='/login'>
                    <button className="button md:w-24 ">
                        Login
                    </button>
                </Link>
                <button className="button md:w-24 ">
                    <Link href="/signup">
                        SignUp
                    </Link>
                </button>
            </div>
        </div>
    )
}
export default Navbar