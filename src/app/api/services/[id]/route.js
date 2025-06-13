import dbConnect from "@/library/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const p = await params;
  const singleData = await dbConnect("services").findOne({
    _id: new ObjectId(p.id),
  });
  return Response.json(singleData);
}
