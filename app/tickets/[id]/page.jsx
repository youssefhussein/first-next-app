
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const res = await fetch("http://localhost:4321/tickets")
  const tickets = await res.json()
  return tickets.map(ticket => ({id: ticket.id}))
}


async function getTicket(id) {

  const res = await fetch("http://localhost:4321/tickets/" + id, {
    next: { revalidate: 30 },
  });
if(!res.ok) {
 notFound()
}
  return res.json();
}

export default async function TicketDetails({ params }) {
  const ticket = await getTicket(params.id);
  return (
    <main>
      <nav>
        <h2 className="pt-3 text-center text-2xl font-bold text-green-900">
          Ticket Details
        </h2>
      </nav>
      <div className="relative my-4 overflow-hidden rounded-md bg-green-100 px-4 py-3 shadow-sm">
        <h3 className="mb-0 text-sm font-bold text-gray-700">{ticket.title}</h3>
        <small>Made by {ticket.user_email}</small>
        <p className="my-4 text-sm leading-6">{ticket.body}</p>
        <div className="flex justify-between py-1">
          <span
            className={`pill ${ticket.priority} absolute bottom-3 right-3 rounded-tl-md`}
          >
            {ticket.priority} priority
          </span>
        </div>
      </div>
    </main>
  );
}
