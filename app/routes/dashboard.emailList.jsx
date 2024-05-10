import { json } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";

import { getEmailListItems } from "../models/emailList.server";

export const loader = async () => {
  try {
    const emailListItems = await getEmailListItems();
    return json({ emailListItems });
  } catch (error) {
    console.error("Failed to load email list items:", error);
    throw new Response("Internal Server Error", { status: 500 });
  }
};


export default function SubscriberList() {
  const data = useLoaderData()
  return (
    <ul>
      {data.emailListItems.length > 0 ? (
        data.emailListItems.map((email) => (
          <li key={email.id}>{email.email}</li>
        ))
      ) : (
        <li>No subscribers found.</li>
      )}
    </ul>
  );
  
}
