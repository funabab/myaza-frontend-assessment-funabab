import AddWalletIcon from "@/assets/images/add-wallet.svg";
import GBPFiatIcon from "@/assets/images/gbp-fiat-icon.svg";
import MoreIcon from "@/assets/images/more-icon.svg";
import NGNFiatIcon from "@/assets/images/ngn-fiat-icon.svg";
import USDFiatIcon from "@/assets/images/usd-fiat-icon.svg";
import { Button } from "@/components/Button/Button";
import { Card } from "@/components/Card/Card";
import {
  Transaction,
  TransactionTable
} from "@/components/TransactionTable/TransactionTable";
import { FiatBalanceCard } from "../FiatBalanceCard/FiatBalanceCard";

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

export default function MyWalletContainer() {
  return (
    <main className="flex h-full grow flex-col gap-6">
      <Card
        title={
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-border">
                Your consolidated balance
              </p>
              <p className="mt-1 text-[28px]/[36px] font-bold">
                $34,780,267.08
              </p>
            </div>

            <div className="flex items-center gap-5">
              <Button>
                <AddWalletIcon />
                Add New Wallet
              </Button>

              <Button variant="ghost" className="size-6 p-0">
                <MoreIcon />
              </Button>
            </div>
          </div>
        }
        className="p-6"
      >
        <div className="mt-3 flex flex-wrap gap-6">
          <FiatBalanceCard
            icon={<NGNFiatIcon />}
            title="NGN Wallet"
            balance="Balance: 245,800.89"
            className="w-70"
          />

          <FiatBalanceCard
            icon={<GBPFiatIcon />}
            title="GBP Wallet"
            balance="Balance: 245,800.89"
            className="w-70"
          />

          <FiatBalanceCard
            icon={<USDFiatIcon />}
            title="USD Wallet"
            balance="Balance: 245,800.89"
            className="w-70"
          />
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
        className="col-span-12 grow p-6 xl:col-span-7"
      >
        <div className="w-full overflow-x-auto">
          <TransactionTable
            className="w-full"
            transactions={recentTransactions}
          />
        </div>
      </Card>
    </main>
  );
}
