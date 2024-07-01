"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function CreateForm() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [priority, setPriority] = useState("low");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await fetch("http://localhost:4321/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        body,
        priority,
        user_email: "wario@example.com", 
      }),
    });
   if (response.status === 201) {
    
       router.refresh();
       router.push(`/tickets`);
   }
    
  };
  return (
    <form
      className="bg-green-700 mx-auto block h-1/2 w-1/2 min-w-fit rounded-md bg-opacity-10 px-7 py-4"
      onSubmit={handleSubmit}
    >
      <label className="block">
        <span>Title:</span>
        <input
          required
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="my-4 mt-2 block w-full rounded-sm px-2 py-1"
        />
      </label>
      <label className="block">
        <span>Body:</span>
        <textarea
          required
          onChange={(e) => setBody(e.target.value)}
          value={body}
          className="my-4 mt-2 block w-full rounded-sm px-2 py-1"
        />
      </label>
      <label className="block">
        <span>Priority:</span>
        <select
          className="my-4 mt-2 block w-full rounded-sm px-2 py-1"
          onChange={(e) => setPriority(e.target.value)}
          value={priority}
        >
          <option className="bg-green-300 font-light" value="low">
            Low Priority
          </option>
          <option className="bg-blue-300 font-light" value="medium">
            Medium Priority
          </option>
          <option className="bg-red-300 font-light" value="high">
            High Priority
          </option>
        </select>
      </label>
      <button
        className="mx-auto block rounded-md bg-green-950 px-3 py-3 text-white"
        disabled={isLoading}
      >
        {isLoading && <span>Adding...</span>}
        {!isLoading && <span>Add Ticket</span>}
      </button>
    </form>
  );
}
