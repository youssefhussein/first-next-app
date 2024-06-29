"use server";

import Link from "next/link";

async function getTickets() {
  const res = await fetch("http://localhost:4321/tickets" , {
    next: { revalidate: 30 },
  });

  return res.json();
}

export default async function TicketList() {
  const tickets = await getTickets();

  return (
    <>
      {tickets.map((ticket) => (
        <div
          key={ticket.id}
          className="my-4 rounded-lg border-2 border-green-200 p-4"
        ><Link href={`/tickets/${ticket.id}`}>
          <h3 className="text-xl font-bold text-green-950">{ticket.title}</h3>
          <p className="text-sm">{ticket.body}</p>
          <div className="flex justify-between py-1">
            <span className={`pill ${ticket.priority} `}>
              {ticket.priority} priority
            </span>
          </div>
          <p className="pt-2 text-sm">
            <span className="text-green-600">
              <a href={`mailto:${ticket.user_email}`}>{ticket.user_email}</a>
            </span>
          </p>
        </Link>
        </div>
      ))}
      {tickets.length === 0 && <p className="text-center">No tickets right now</p>}
    </>
  );
}
