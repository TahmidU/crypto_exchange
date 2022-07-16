import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosError } from "axios";

async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { currency } = req.query;

  switch (req.method) {
    case "GET":
      try {
        const results = await axios({
          method: "get",
          headers: { "Content-type": "application/json" },
          url: `https://api-pub.bitfinex.com/v2/tickers?symbols=${currency}`,
        });
        res.status(results.status).json(results.data);
      } catch (error) {
        const err = error as AxiosError;
        res.status(err.response?.status || 500).json(err.response?.data);
      }
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end("Method not Allowed");
      break;
  }
}

export default handle;
