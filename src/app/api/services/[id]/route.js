import dbConnect from "@/library/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const p = await params;
  const singleData = await dbConnect("services").findOne({
    _id: new ObjectId(p.id),
  });
  return Response.json(singleData);
}

export async function PATCH(req, { params }) {
  const p = await params;
  const filter = { _id: new ObjectId(p.id) };
  const updatedDoc = await req.json();
  const updatedData = await dbConnect("services").updateOne(
    filter,
    {
      $set: { ...updatedDoc },
    },
    { upsert: true }
  );
  return Response.json(updatedData);
}
