import React from "react";
import Link from 'next/link'
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {

    const [showModal, setShowModal] = React.useState(false);

    return (
        <div className="">
            <nav className="flex items-center bg-secondary text-tertiary p-3 flex-wrap px-4 lg:px-16 md:px-8">
                <Link href="/" passHref><span className="p-2 mr-4 inline-flex items-center text-4xl cursor-pointer text-white font-bold">
                    APPNAME
                </span></Link>
                <button className="lg:hidden right-0 absolute md:px-8 px-6 mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setShowNavbar(true)} aria-hidden="false" aria-label="button">
                    <HiOutlineMenuAlt3 className="h-7 w-7" aria-hidden="false" />
                </button>
                {showModal ? (
                    <>
                        <div
                            className=" flex overflow-x-hidden mx-4 md:mx-8 overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative my-6 mx-auto w-screen ">
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-800 outline-none focus:outline-none">
                                    <div className="flex items-start justify-between text-white p-5 border-b border-solid border-blueGray-200 rounded-t">
                                        <div className="text-3xl cursor-pointer">
                                            <Link href="/" passHref>
                                                APPNAME
                                            </Link>
                                        </div>

                                        <button className="absolute right-6" onClick={() => setShowNavbar(false)} aria-hidden="false" aria-label="button">
                                            <HiX className="h-7 w-7" aria-hidden="false" />
                                        </button>

                                    </div>
                                    <div className="grid place-items-center text-xl py-2 w-full" >
                                        <Link href="/" passHref>
                                            <span className="lg:inline-flex px-3 my-4 py-3 rounded text-gray-100 items-center justify-center hover:bg-blue-400 hover:text-white cursor-pointer">Home</span>
                                        </Link>

                                        <Link href="/explore" passHref>
                                            <span className="lg:inline-flex px-3 my-4 py-3 rounded text-gray-100 items-center justify-center hover:bg-blue-400 hover:text-white cursor-pointer">Explore</span>
                                        </Link>

                                        <Link href="/find" passHref>
                                            <span className="lg:inline-flex px-3 my-4 py-3 rounded text-gray-100 items-center justify-center hover:bg-blue-400 hover:text-white cursor-pointer">Search</span>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}

                <div className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto" >
                    <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full text-xl lg:items-center items-start flex flex-col lg:h-auto" >

                        <Link href="/" passHref>
                            <span className="lg:inline-flex lg:w-auto w-full px-6 mx-2 py-2 rounded text-gray-100 items-center justify-center hover:bg-blue-400 hover:text-white cursor-pointer">Home</span>
                        </Link>

                        <Link href="/explore" passHref>
                            <span className="lg:inline-flex lg:w-auto w-full px-6 mx-2 py-2 rounded text-gray-100 items-center justify-center hover:bg-blue-400 hover:text-white cursor-pointer">Explore</span>
                        </Link>

                        <Link href="/find" passHref>
                            <span className="lg:inline-flex lg:w-auto w-full px-6 mx-2 py-2 rounded text-gray-100 items-center justify-center hover:bg-blue-400 hover:text-white cursor-pointer">Search</span>
                        </Link>

                    </div>
                </div>
            </nav>
        </div>
    )
}
