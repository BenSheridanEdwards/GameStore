// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { Rates } from "@/types";

export default function handler(req: NextApiRequest, res: NextApiResponse<Rates>) {
  res.status(200).json({
    USD: 1,
    EUR: 0.8738967054,
    GBP: 0.7869876781,
  });
}
