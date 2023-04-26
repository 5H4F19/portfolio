import clientPromise from "@/utils/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await clientPromise;
    const db = client.db("portfolio");

    const post = await db.collection("socials").find({}).toArray();

    res.json(post[0]);
  } catch (e: any) {
    console.error(e);
    throw new Error(e).message;
  }
};
