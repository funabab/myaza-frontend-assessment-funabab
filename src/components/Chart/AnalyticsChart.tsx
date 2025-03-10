"use client";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  ResponsiveContainerProps,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

export interface AnalyticsData {
  month: string;
  income: number;
  outcome: number;
}

export interface AnalyticsChartProps
  extends Omit<ResponsiveContainerProps, "children"> {
  data: AnalyticsData[];
  year: string;
}

const AnalyticsChart = ({ data, year, ...props }: AnalyticsChartProps) => {
  return (
    <ResponsiveContainer {...props}>
      <BarChart data={data} barGap={8} barCategoryGap={44}>
        <XAxis
          dataKey="month"
          axisLine={false}
          tickLine={false}
          tick={{
            fontSize: "0.75rem",
            color: "#8C89B4",
            fontWeight: 400
          }}
          dy={10}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{
            style: {
              fontSize: "0.75rem",
              color: "#8C89B4",
              fontWeight: 400
            }
          }}
          tickFormatter={(value) => `${value / 1000}0K`}
          tickCount={5}
          domain={[0, 50000]}
          dx={-10}
        />
        <CartesianGrid
          horizontal={true}
          vertical={false}
          strokeDasharray="5 5"
          stroke="#8C89B480"
        />
        <Tooltip
          cursor={false}
          content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg bg-chart-tooltip px-4 py-3 text-xs font-medium text-white shadow-md">
                  <p>{`${label} ${year}`}</p>
                  <p>${payload[0].value?.toLocaleString()}</p>
                </div>
              );
            }
            return null;
          }}
        />
        <Bar
          dataKey="outcome"
          className="fill-chart-1"
          radius={[10, 10, 0, 0]}
          barSize={6.03}
        />
        <Bar
          dataKey="income"
          className="fill-chart-2"
          radius={[10, 10, 0, 0]}
          barSize={6.03}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export { AnalyticsChart };
