"use client"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from 'next/link'
import Hamburger from "./icons/Hamburger.jsx"
import Cancel from "./icons/Cancel.jsx"
function Navbar() {
    const [ham, setHam] = useState(false);
    const handleLogout = async () => {
        try {
            console.log("Logged out successfully");
            toast.success("Logged out successfully!", {
                position: toast.POSITION.TOP_CENTER,
            });
        } catch (error) {
            console.error("Error logging out:", error);
            toast.error("Error logging out!", {
                position: toast.POSITION.TOP_CENTER,
            });
        }
    };
    return (
        <div className="bg-white sticy top-0 py-4 z-50 overflow-x-hidden ">
            <nav className="flex items-center justify-between w-[86%] mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -100, rotate: 0 }}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
                    once={true}
                    transition={{ duration: 1.5 }}
                    className=""
                >
                    <img
                        className="object-contain w-[110px] ml-[-30px]"
                        src="/E-Learning Logo (4) 1.png"
                        alt="Logo"
                        srcset=""chr
                    />
                </motion.div>
                <div
                    onClick={() => setHam(!ham)}
                    className="flex cursor-pointer lg:hidden"
                >
                    {!ham ? <Hamburger /> : <Cancel />}
                </div>
                <div
                    className={`bg-[#89B374] ${ham ? "" : "hidden"
                        } absolute left-0 top-0 h-[100vh] w-[60%] py-12`}
                >
                    <div className="flex flex-col h-[60vh] items-center justify-between">
                        <button className="uppercase font-poppins navtext whitespace-nowrap hover:underline decoration-[#89B374] decoration-4">
                            <Link href="/Home">Home</Link>
                        </button>
                        <button className="uppercase font-poppins navtext whitespace-nowrap hover:underline decoration-[#89B374] decoration-4">
                            <Link href="/dashboard">Courses</Link>

                        </button>

                        <button className="uppercase font-poppins navtext whitespace-nowrap hover:underline decoration-[#89B374] decoration-4">
                            <Link href="/dashboard">Contact</Link>
                        </button>

                        <button className="uppercase font-poppins navtext whitespace-nowrap  navbuttoncontact">
                            <Link href="/dashboard">About us</Link>
                        </button>
                        <button className="uppercase font-poppins navtext whitespace-nowrap  navbuttoncontact">
                            <Link href="/dashboard">Login</Link>
                        </button>
                    </div>
                </div>
                {/* For Large screens */}
                <motion.div
                    initial={{ opacity: 0, x: 100, rotate: 0 }}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
                    once={true}
                    transition={{ duration: 2 }}
                    className="hidden lg:flex items-center justify-between gap-x-[32.72px]"
                >
                    <button className="uppercase font-poppins navtext whitespace-nowrap hover:underline decoration-[#89B374]  decoration-4">
                        <Link href="/dashboard">Home</Link>
                    </button>
                    <button className="uppercase font-poppins navtext whitespace-nowrap hover:underline decoration-[#89B374]  decoration-4">
                        <Link href="/dashboard">Courses</Link>
                    </button>
                    <button className="uppercase font-poppins navtext whitespace-nowrap hover:underline decoration-[#89B374]  decoration-4">
                        <Link href="/dashboard">Contact</Link>
                    </button>
                    <button className="uppercase font-poppins navtext whitespace-nowrap navbuttoncontact">
                    <Link href="/dashboard">About us</Link>
                    </button>
                    <button className="uppercase font-poppins navtext whitespace-nowrap  navbuttoncontact">
                            <Link href="/dashboard">Login</Link>
                        </button>
                </motion.div>
            </nav>
        </div>
    );
}

export default Navbar; 