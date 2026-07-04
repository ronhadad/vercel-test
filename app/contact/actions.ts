"use server";

import { sql } from "@/lib/db";

export type ContactRequestInput = {
  fullName: string;
  phone: string;
  email: string;
  destination: string;
  dates: string;
  tripType: string;
};

export async function submitContactRequest(data: ContactRequestInput) {
  await sql`
    INSERT INTO contact_requests (full_name, phone, email, destination, trip_dates, trip_type)
    VALUES (${data.fullName}, ${data.phone}, ${data.email}, ${data.destination || null}, ${data.dates || null}, ${data.tripType || null})
  `;
}
