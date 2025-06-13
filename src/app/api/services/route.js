import dbConnect from "@/library/dbConnect";

export async function GET() {
  const data = await dbConnect("services").find({}).toArray();

  return Response.json({ data });
}
