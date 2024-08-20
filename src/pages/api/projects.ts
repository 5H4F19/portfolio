import clientPromise from "@/utils/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

const Project =  async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await clientPromise;
    const db = client.db("portfolio");

    const post = await db.collection("projects").find({}).sort({ createdAt: -1 }).toArray();

    res.json(post);
  } catch (e: any) {
    console.error(e);
    throw new Error(e).message;
  }
}

export default Project
