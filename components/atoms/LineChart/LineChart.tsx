import { LineChartStyle } from "./styles";
import { ReactElement } from "react";
import { Serie } from "@nivo/line";

interface ILineChartProps {
  data?: Serie[];
}

export default function LineChart({
  data = [],
}: ILineChartProps): ReactElement {
  return <LineChartStyle data={data} />;
}
