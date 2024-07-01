import Link from "next/link";

export default function notFound() {
  return (
    <div className="mt-72 text-center">
      <h1 className="text-6xl font-bold text-green-900">
        OOPS this ticket was not found :/
      </h1>
      <br />
      <p className="text-2xl font-bold text-green-700">
        Go back to {""}
        <Link href="/tickets">all tickets?</Link>
      </p>
    </div>
  );
}
