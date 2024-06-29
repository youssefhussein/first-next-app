import TicketList from "./TicketList";
export default function Tickets() {
	
	
	return (
    <div>
      <div className="text-center text-green-400">
        <h1 className="text-3xl font-bold">Tickets</h1>
        <div>Current list of tickets</div>
      </div>
      <TicketList />
    </div>
  );
}
