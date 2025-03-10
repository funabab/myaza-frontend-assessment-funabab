"use client";
import {
  Cell,
  Label,
  Pie,
  PieChart,
  ResponsiveContainer,
  ResponsiveContainerProps
} from "recharts";

export interface ActivityData {
  name: string;
  value: number;
  color: string;
}

export interface ActivityChartProps
  extends Omit<ResponsiveContainerProps, "children"> {
  data: [ActivityData, ActivityData, ActivityData];
}

const ActivityChart = ({ data, ...props }: ActivityChartProps) => {
  return (
    <>
      <ResponsiveContainer {...props}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            startAngle={180}
            endAngle={0}
            innerRadius="60%"
            outerRadius="80%"
            paddingAngle={0}
            dataKey="value"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth={20}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                stroke={entry.color}
                radius={8}
                className="pointer-events-none"
              />
            ))}
            <Label
              value="75%"
              position="center"
              fontSize={20}
              offset={0}
              className="pointer-events-none font-bold"
              fill="#fff"
              style={{
                transform: "translateY(-40px)"
              }}
            />
          </Pie>

          <Pie
            data={data}
            cx="50%"
            cy="50%"
            startAngle={180}
            endAngle={0}
            innerRadius="60%"
            outerRadius="80%"
            paddingAngle={0}
            dataKey="value"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth={20}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={index === 1 ? entry.color : "transparent"}
                stroke={index === 1 ? entry.color : "transparent"}
                radius={8}
                className="pointer-events-none"
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute right-[5%] bottom-1/2 left-[5%] mt-4 flex translate-y-24 justify-between gap-4">
        {data
          .filter((item) => item.name !== "Remaining")
          .map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-2 flex items-center">
                <div
                  className="mr-2 h-3 w-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span>{item.name}</span>
              </div>
              <p className="text-lg font-normal">{item.value}%</p>
            </div>
          ))}
      </div>
    </>
  );
};

export { ActivityChart };
