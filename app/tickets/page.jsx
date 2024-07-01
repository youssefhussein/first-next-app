import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";
export default function Tickets() {
	
	
	return (
    <main>
      <div className="pl-10 pt-3 text-green-400">
        <h1 className="text-3xl font-bold">Tickets</h1>
        <div>Current list of tickets</div>
      </div>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}
