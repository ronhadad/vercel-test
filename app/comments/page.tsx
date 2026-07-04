import { sql } from "@/lib/db";
import { revalidatePath } from "next/cache";

type Comment = { id: number; comment: string; created_at: string };

export default async function CommentsPage() {
  const comments = (await sql`
    SELECT id, comment, created_at FROM comments ORDER BY created_at DESC
  `) as Comment[];

  async function create(formData: FormData) {
    "use server";
    const comment = formData.get("comment");
    if (!comment || typeof comment !== "string") return;
    await sql`INSERT INTO comments (comment) VALUES (${comment})`;
    revalidatePath("/comments");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-24">
      <h1 className="text-4xl font-bold">Comments</h1>

      <form action={create} className="flex gap-2">
        <input
          type="text"
          name="comment"
          placeholder="Write a comment"
          required
          className="rounded border px-3 py-2"
        />
        <button
          type="submit"
          className="rounded bg-black px-4 py-2 text-white"
        >
          Submit
        </button>
      </form>

      <ul className="w-full max-w-md space-y-2">
        {comments.map((c) => (
          <li key={c.id} className="rounded-lg bg-gray-100 p-4">
            {c.comment}
          </li>
        ))}
      </ul>
    </main>
  );
}
