import Link from "next/link";

export default function NotFound () {
  return (
    <main className="text-center mt-72">
      <h1 className="text-6xl font-bold text-green-900">OOPS 404</h1>
      <p className="text-lg font-bold text-green-700">
        <Link href="/">
          Page not found. Wanna go back?{" -- "}
          <span className="underline">Shrek Home</span>
        </Link>
      </p>
    </main>
  );
}