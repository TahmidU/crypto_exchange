import { GetServerSideProps } from "next";
import HomePage from "components/pages/HomePage";
import axios from "axios";

export const getServerSideProps: GetServerSideProps = async () => {
  const tradingPairsInfo = await axios({
    method: "get",
    headers: { "Content-type": "application/json" },
    url: `https://www.bitstamp.net/api/v2/trading-pairs-info`,
  });

  return {
    props: { tradingPairsInfo: tradingPairsInfo.data },
  };
};

export default HomePage;
