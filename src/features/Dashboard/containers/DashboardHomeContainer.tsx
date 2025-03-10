"use client";
import { StatCard } from "@/components/Card/StatCard";
import React from "react";
import StatsArrowDownIcon from "@/assets/images/stats-arrow-down-icon.svg";
import StatsArrowUpIcon from "@/assets/images/stats-arrow-up-icon.svg";
import { Card } from "@/components/Card/Card";
import { AnalyticsChart } from "@/components/Chart/AnalyticsChart";
import DropdownIcon from "@/assets/images/arrow-down-icon.svg";
import {
  Transaction,
  TransactionTable
} from "@/components/TransactionTable/TransactionTable";
import { PaymentCarousel } from "../components/PaymentCarousel/PaymentCarousel";
import { Button } from "@/components/Button/Button";
import { ActivityChart } from "@/components/Chart/ActivityChart";

const analyticsData = [
  { month: "Jan", income: 35000, outcome: 25000 },
  { month: "Feb", income: 26000, outcome: 33000 },
  { month: "Mar", income: 29000, outcome: 22000 },
  { month: "Apr", income: 35000, outcome: 26000 },
  { month: "May", income: 40000, outcome: 33000 },
  { month: "Jun", income: 22000, outcome: 27000 },
  { month: "Jul", income: 22000, outcome: 27000 },
  { month: "Aug", income: 22000, outcome: 27000 },
  { month: "Oct", income: 35000, outcome: 25000 },
  { month: "Nov", income: 26000, outcome: 33000 },
  { month: "Dec", income: 29000, outcome: 22000 }
];

const recentTransactions: Transaction[] = [
  {
    id: "1",
    icon: "https://dummyjson.com/icon/1/150",
    name: "Adobe Affer Effect",
    date: "Sat,20 Apr 2020",
    amount: "$80.09",
    status: "deposited",
    description: "Adobe after Virtual Card top-up"
  },
  {
    id: "2",
    icon: "https://dummyjson.com/icon/2/150",
    name: "McDonald’s",
    date: "Sat,20 Apr 2020",
    amount: "$80.09",
    status: "deposited",
    description: "McDonald’s after Virtual Card top-up"
  },
  {
    id: "3",
    icon: "https://dummyjson.com/icon/3/150",
    name: "Levi",
    date: "Sat,20 Apr 2020",
    amount: "$80.09",
    status: "deposited",
    description: "Levi after Virtual Card top-up"
  },
  {
    id: "4",
    icon: "https://dummyjson.com/icon/4/150",
    name: "Adobe Affer Effect",
    date: "Sat,20 Apr 2020",
    amount: "$80.09",
    status: "deposited",
    description: "Adobe after Virtual Card top-up"
  },
  {
    id: "5",
    icon: "https://dummyjson.com/icon/5/150",
    name: "Levi",
    date: "Sat,20 Apr 2020",
    amount: "$80.09",
    status: "deposited",
    description: "Levi after Virtual Card top-up"
  }
];

export default function DashboardHomeContainer() {
  return (
    <main className="flex w-full grid-cols-12 flex-col gap-10 sm:grid">
      <div className="col-span-12 flex min-w-0 grow flex-col gap-10 xl:col-span-7">
        <div className="grid gap-6 md:grid-cols-2">
          <StatCard
            icon={<StatsArrowDownIcon />}
            rate="+1.29%"
            status="success"
            title="Total Income"
            value="$632.000"
          />

          <StatCard
            icon={<StatsArrowUpIcon />}
            rate="+1.29%"
            status="danger"
            title="Total Outcome"
            value="$632.000"
          />
        </div>

        <div>
          <Card
            title={
              <div className="flex justify-between gap-5 md:items-center">
                <h2 className="text-xl font-semibold sm:text-2xl">Analytics</h2>

                <div className="flex flex-col items-end gap-3 md:flex-row md:items-center md:gap-5">
                  <div className="order-2 flex items-center gap-3 md:order-none">
                    <div className="flex items-center gap-2">
                      <div className="mr-2 h-3 w-3 rounded-full bg-[#6359E9]" />
                      <span>Income</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="mr-2 h-3 w-3 rounded-full bg-[#64CFF6]" />
                      <span>Outcome</span>
                    </div>
                  </div>

                  <button className="flex shrink-0 cursor-pointer items-center gap-px rounded-sm border border-muted-foreground bg-none px-1 text-xs text-muted-foreground">
                    2020{" "}
                    <DropdownIcon className="ml-1 [&_path]:fill-muted-foreground" />
                  </button>
                </div>
              </div>
            }
            className="p-6"
          >
            <div className="relative h-64.25 min-w-0">
              <AnalyticsChart
                data={analyticsData}
                year={new Date().getFullYear().toString()}
                width="100%"
                height="100%"
              />
            </div>
          </Card>
        </div>
      </div>

      <Card
        title={<h2 className="text-xl font-semibold sm:text-2xl">My Card</h2>}
        className="order-3 col-span-12 p-6 md:col-span-6 xl:order-none xl:col-span-5"
      >
        <div>
          <p className="text-muted-foreground">Card Balance</p>
          <p className="text-2xl font-semibold">$15,595.015</p>
        </div>
        <div className="mt-5">
          <PaymentCarousel
            payments={[
              {
                amount: "$5,750,20",
                cardNumber: "5282 3456 7890 1289",
                expiryDate: "09/25"
              },
              {
                amount: "$5,750,20",
                cardNumber: "5282 3456 7890 1289",
                expiryDate: "09/25"
              },
              {
                amount: "$5,750,20",
                cardNumber: "5282 3456 7890 1289",
                expiryDate: "09/25"
              }
            ]}
          />
        </div>
        <div className="mt-6 grid grid-cols-2 gap-6">
          <Button>Manage Cards</Button>
          <Button variant="outline">Transfer</Button>
        </div>
      </Card>

      <Card
        title={
          <div className="flex items-center justify-between gap-5">
            <h2 className="text-xl font-semibold sm:text-2xl">
              Recent Transactions
            </h2>

            <button className="flex shrink-0 cursor-pointer items-center bg-none text-sm font-semibold text-muted-foreground">
              See All
            </button>
          </div>
        }
        className="col-span-12 p-6 xl:col-span-7"
      >
        <div className="w-full overflow-x-auto">
          <TransactionTable
            className="w-full"
            transactions={recentTransactions}
            filter={{
              description: true
            }}
          />
        </div>
      </Card>

      <Card
        title={
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold sm:text-2xl">Activity</h2>

            <button className="flex shrink-0 cursor-pointer items-center gap-px rounded-sm border border-muted-foreground bg-none px-1 text-xs text-muted-foreground">
              Month{" "}
              <DropdownIcon className="ml-1 [&_path]:fill-muted-foreground" />
            </button>
          </div>
        }
        className="order-4 col-span-12 p-6 md:col-span-6 xl:order-none xl:col-span-5"
      >
        <div className="relative h-70">
          <ActivityChart
            data={[
              { name: "Daily payment", value: 55, color: "#7B5EFF" },
              { name: "Hobby", value: 35, color: "#5ECFFF" },
              { name: "Remaining", value: 15, color: "#3A3A5A" }
            ]}
          />
        </div>
        <div className="flex items-center justify-center">
          <Button className="w-full max-w-70" variant="outline">
            Sell All Activity
          </Button>
        </div>
      </Card>
    </main>
  );
}
