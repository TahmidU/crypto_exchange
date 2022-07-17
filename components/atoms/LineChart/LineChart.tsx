import { LineChartStyle } from "./styles";
import { Margin } from "@nivo/core";
import { ReactElement } from "react";
import { ScaleSpec } from "@nivo/scales";
import { Serie } from "@nivo/line";

interface ILineChartProps {
  data?: Serie[];
}

export default function LineChart({
  data = [],
}: ILineChartProps): ReactElement {
  const margin: Margin = { top: 50, right: 110, bottom: 50, left: 60 };

  const xScale: ScaleSpec = {
    type: "point",
  };

  const yScale: ScaleSpec = {
    type: "linear",
    min: "auto",
    max: "auto",
    stacked: true,
    reverse: false,
  };

  const axisBottom: any = {
    orient: "bottom",
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: "Time (in seconds)",
    legendOffset: 36,
    legendPosition: "middle",
  };

  const axisLeft: any = {
    orient: "left",
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: "Last Price Value",
    legendOffset: -55,
    legendPosition: "middle",
  };

  const legends: any = [
    {
      anchor: "bottom-right",
      direction: "column",
      justify: false,
      translateX: 100,
      translateY: 0,
      itemsSpacing: 0,
      itemDirection: "left-to-right",
      itemWidth: 80,
      itemHeight: 20,
      itemOpacity: 0.75,
      symbolSize: 12,
      symbolShape: "circle",
      symbolBorderColor: "rgba(0, 0, 0, .5)",
      effects: [
        {
          on: "hover",
          style: {
            itemBackground: "rgba(0, 0, 0, .03)",
            itemOpacity: 1,
          },
        },
      ],
    },
  ];

  return (
    <LineChartStyle
      data={data}
      margin={margin}
      xScale={xScale}
      yScale={yScale}
      yFormat=" >-.2f"
      axisBottom={axisBottom}
      axisLeft={axisLeft}
      pointSize={10}
      useMesh={true}
      legends={legends}
    />
  );
}
