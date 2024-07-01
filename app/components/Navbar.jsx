import React from "react";
import Link from "next/link";
import Image from "next/image";
import Shrek from "../../public/shrek-icon.png";
export default function Navbar() {
	return (
		<nav className="flex items-center justify-center gap-5 border-b-8 border-green-200 py-5 pb-4 text-green-600">
			<Image
				src={Shrek}
				alt="shrek"
				width={50}
				placeholder="blur"
				className="inline rounded-3xl  hover:text-black"
				quality={100}
			></Image>
			<h1>Shrek Mania</h1> <Link href="/">Home</Link>{" "}
			<Link href="/tickets">Tickets</Link>
			<Link href="/tickets/create">Create Ticket</Link>
		</nav>
	);
}
