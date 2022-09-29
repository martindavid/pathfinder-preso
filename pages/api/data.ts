import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: number;
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json([
    {
      id: 1,
      name: "Jane Doe 1",
    },
    {
      id: 2,
      name: "Jane Doe 2",
    },
    {
      id: 3,
      name: "Jane Doe 3",
    },
    {
      id: 4,
      name: "Jane Doe 4",
    },
    {
      id: 5,
      name: "Jane Doe 5",
    },
    {
      id: 6,
      name: "Jane Doe 6",
    },
    {
      id: 7,
      name: "Jane Doe 7",
    },
  ]);
}
