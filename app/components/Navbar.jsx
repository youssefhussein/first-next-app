import React from "react";
import Link from "next/link";
import Image from "next/image";
import Shrek from "../../public/shrek-icon.png";
export default function Navbar() {
  return (
    <nav
      className=" flex items-center gap-5  pb-4 border-b-8 border-green-200 justify-center  py-5 text-green-600  "
    >
      <Image
        src={Shrek}
        alt="shrek"
        width={50}
        placeholder="blur"
        className="rounded-3xl inline hover:text-black mix-blend-multiply bg-gradient-to-r from-cyan-500 to-blue-500"
        quality={100}
       
      ></Image>
      <h1  >Shrek Mania</h1> <Link href="/"  >Home</Link>{" "}
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
