"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useGetJobStatistics } from "@/hooks/useGetJobStatistics";
import { useEffect } from "react";

interface MultipleLineChartProps {
  chartData: any;
}

export const description = "A multiple line chart";

const chartData = [
  {
    month: "January",
    new: 186,
    completed: 80,
    active: 40,
    overdue: 2,
    paused: 4,
  },
  {
    month: "February",
    new: 305,
    completed: 200,
    active: 20,
    overdue: 22,
    paused: 4,
  },
  {
    month: "March",
    new: 237,
    completed: 120,
    active: 40,
    overdue: 24,
    paused: 14,
  },
  {
    month: "April",
    new: 73,
    completed: 190,
    active: 3,
    overdue: 20,
    paused: 24,
  },
  { month: "May", new: 209, completed: 130, active: 1, overdue: 2, paused: 34 },
  {
    month: "June",
    new: 214,
    completed: 140,
    active: 10,
    overdue: 23,
    paused: 41,
  },
];

const chartConfig = {
  totalJobs: {
    label: "New",
    color: "#054753",
  },
  totalActiveJobs: {
    label: "Active",
    color: "#6667FF",
  },
  totalOverdueJobs: {
    label: "Overdue",
    color: "#FF5D7A",
  },
  totalPausedJobs: {
    label: "Paused",
    color: "#FF9933",
  },
  totalCompletedJobs: {
    label: "Completed",
    color: "#25C269",
  },
} satisfies ChartConfig;

export function MultipleLineChart({ chartData }: MultipleLineChartProps) {
  return (
    <>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="sm:text-2xl text-lg">Jobs Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="w-full h-[50vh]">
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="period"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 6)}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Line
                dataKey="totalJobs"
                type="monotone"
                stroke="#054753"
                strokeWidth={2}
                dot={false}
              />
              <Line
                dataKey="totalActiveJobs"
                type="monotone"
                stroke="#6667FF"
                strokeWidth={2}
                dot={false}
              />
              <Line
                dataKey="totalOverdueJobs"
                type="monotone"
                stroke="#FF5D7A"
                strokeWidth={2}
                dot={false}
              />
              <Line
                dataKey="totalPausedJobs"
                type="monotone"
                stroke="#FF9933"
                strokeWidth={2}
                dot={false}
              />
              <Line
                dataKey="totalCompletedJobs"
                type="monotone"
                stroke="#25C269"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </>
  );
}
