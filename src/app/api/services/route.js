import dbConnect from "@/library/dbConnect";

export async function GET() {
  const data = await dbConnect("services").find({}).toArray();

  return Response.json({ data });
}

export async function POST(req) {
  const postedData = await req.json();

  const result = await dbConnect("services").insertOne(postedData);

  return Response.json(result);
}
