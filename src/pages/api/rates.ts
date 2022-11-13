// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type Rates = {
  USD: number;
  GBP: number;
  EUR: number;
  [x: string]: number;
};


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Rates>
) {
  res.status(200).json({
    USD: 1,
    EUR: 0.8738967054,
    GBP: 0.7869876781,
  });
}
