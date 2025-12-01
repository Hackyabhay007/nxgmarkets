import {
  ArrowDownToLine,
  ArrowUpToLine,
  Download,
  RefreshCcw,
  TrendingUp,
  Wallet,
} from "lucide-react";
import Layout from "../layouts/layout";
import Navbar from "../components/navbar";
import DashboardFooter from "../components/dashboard-footer";
import useUser from "../hooks/useUser";

const breadcrumb = [
  {
    title: "Dashboard",
    route: "/user/dashboard",
  },
];

const financialStats = [
  {
    label: "Balance",
    value: "$ 0",
    change: "+$0",
    changeColor: "text-emerald-500",
    icon: Wallet,
  },
  {
    label: "Trader Volume",
    value: "0",
    change: "0",
    changeColor: "text-rose-500",
    icon: TrendingUp,
  },
  {
    label: "Total Withdraw",
    value: "$ 0",
    change: "-$0",
    changeColor: "text-rose-500",
    icon: ArrowDownToLine,
  },
  {
    label: "Total Deposit",
    value: "$0",
    change: "$0",
    changeColor: "text-emerald-500",
    icon: ArrowUpToLine,
  },
];

const tradingAccounts = [
  {
    account: "21164",
    leverage: "1:500",
    type: "Beginner Boost",
    balance: "$ 0",
    equity: "$ 0",
  },
  {
    account: "22579",
    leverage: "1:500",
    type: "Beginner Boost",
    balance: "$ 0",
    equity: "$ 0",
  },
];

const downloadPlatforms = [
  {
    label: "Desktop",
    icon: "/src/assets/windows.png",
    subText: "Windows",
  },
  {
    label: "iOS",
    icon: "/src/assets/apple.png",
    subText: "Apple",
  },
  {
    label: "Android",
    icon: "/src/assets/android.png",
    subText: "Google Play",
  },
];

const overviewTicks = [
  "1.0",
  "0.8",
  "0.6",
  "0.4",
  "0.2",
  "0",
  "-0.2",
  "-0.4",
  "-0.6",
  "-0.8",
  "-1.0",
];

const overviewMonths = [
  "Jan 2025",
  "Feb 2025",
  "Mar 2025",
  "Apr 2025",
  "May 2025",
  "Jun 2025",
  "Jul 2025",
  "Aug 2025",
  "Sep 2025",
  "Oct 2025",
  "Nov 2025",
  "Dec 2025",
];

export default function Dashboard() {

  const { user } = useUser();


  return (
    <Layout>
      <Navbar breadcrumb={breadcrumb} balance={0} />

      <main className="flex-1">
        <div className="relative overflow-hidden py-10">
          <div className="relative grid gap-8 lg:grid-cols-[1fr,1fr]">
            <div className="relative z-10 space-y-8 lg:pr-12">
              {/* Title Section */}
              <div className="space-y-4">
                <h1 className="px-5 text-4xl font-bold text-[#596da0]">
                  {user && user?.name}
                </h1>
              </div>

              {/* Financial Stats Cards */}
              <div className="grid w-full max-w-3xl gap-4 sm:grid-cols-2">
                {financialStats.map((card) => (
                  <div
                    key={card.label}
                    className="w-full rounded-md border border-[#e8eaf2] bg-white p-4"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-[#6b7a9d]">
                          {card.label}
                        </p>
                        <div className="mt-1 flex items-center gap-2">
                          <p className="text-lg font-semibold text-[#4a73d0]">
                            {card.value}
                          </p>
                          <p
                            className={`text-sm font-medium ${card.changeColor}`}
                          >
                            {card.change}
                          </p>
                        </div>
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#b52c61] text-white">
                        <card.icon className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trading Accounts Section */}
              <div className="relative w-full max-w-3xl rounded-md border border-[#e8eaf2] bg-white p-4 shadow-sm">
                <div className="absolute top-0 left-0 h-16 w-1 rounded-full bg-[#b52c61]" />

                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <p className="text-base font-semibold text-[#6b7a9d]">
                      Trading Account
                    </p>
                  </div>
                  <button className="rounded-md border border-[#b52c61] px-5 py-1.5 text-sm font-semibold text-[#b52c61] transition hover:scale-105">
                    OPEN ACCOUNT
                  </button>
                </div>
                <div className="divide-y divide-[#e8eaf2] max-h-[330px] overflow-y-auto">
                  {tradingAccounts.map((account) => (
                    <div
                      key={account.account}
                      className="flex flex-wrap items-center gap-y-4 py-4 first:pt-0 last:pb-0"
                    >
                      <div className="flex w-full flex-1 items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center">
                          <img
                            src={"/src/assets/mt5_icon.png"}
                            alt="mt5_icon"
                            className="h-6"
                          />
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-[#8b90ad] tracking-wide">
                            Account
                          </p>
                          <p className="text-sm font-semibold text-[#364063]">
                            {account.account}
                          </p>
                        </div>
                      </div>
                      <div className="flex  flex-1 flex-col">
                        <span className="text-xs font-semibold text-[#8b90ad]  tracking-wide">
                          Leverage
                        </span>
                        <span className="text-sm font-semibold text-[#364063]">
                          {account.leverage}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col">
                        <span className="text-xs font-semibold text-[#8b90ad] tracking-wide">
                          Account Type
                        </span>
                        <span className="text-sm font-semibold text-[#364063]">
                          {account.type}
                        </span>
                      </div>
                      <div className="flex min-w-[140px] flex-1 items-center gap-2">
                        <div>
                          <p className="text-xs font-semibold text-[#8b90ad] uppercase tracking-wide">
                            Balance
                          </p>
                          <div className="flex gap-2">
                            <p className="text-sm font-semibold text-[#364063]">
                              {account.balance}
                            </p>
                            <button className="rounded-full border border-[#ccd2e6] p-1 text-[#8b90ad] hover:bg-gray-50">
                              <RefreshCcw className="h-3 w-3" />{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 items-center gap-2">
                        <div>
                          <p className="text-xs font-semibold text-[#8b90ad] uppercase tracking-wide">
                            Equity
                          </p>
                          <div className="flex gap-2">
                            <p className="text-sm font-semibold text-[#364063]">
                              {account.equity}
                            </p>
                            <button className="rounded-full border border-[#ccd2e6] p-1 text-[#8b90ad] hover:bg-gray-50">
                              <RefreshCcw className="h-3 w-3" />{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="pointer-events-none absolute inset-y-0 right-0 flex justify-end"
              aria-hidden="true"
            >
              <img
                src={"/src/assets/globe.png"}
                alt="logo"
                className="h-full opacity-70"
              />
            </div>
          </div>
        </div>

        {/* Seven Days Trade Count + Overview */}
        <div className="pb-8">
          <div className="flex w-full gap-6">
            <div className="relative flex-[1.5] overflow-hidden rounded-md border border-[#e8eaf2] bg-white p-6 shadow-sm">
              <div className="absolute left-0 top-0 h-20 w-1 rounded-full bg-[#b52c61]" />

              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-[#58648a]">
                  Seven Days Trade Count
                </h3>
              </div>

              <div className="mt-6 rounded-md bg-linear-to-br from-[#1d2752] via-[#13173d] to-[#070a1a] p-6 text-white">
                <div className="flex gap-6">
                  {/* Y-axis labels */}
                  <div className="flex flex-col justify-between text-xs font-semibold text-white/70">
                    {["0.8", "0.4", "0"].map((label) => (
                      <span key={label}>{label}</span>
                    ))}
                  </div>

                  <div className="relative h-[150px] flex-1 overflow-hidden"></div>
                </div>
              </div>

              {/* MetaTrader Section */}
              <div className="mt-6 border-t border-[#eceff8] pt-6">
                {/* Title */}
                <div className="flex items-center gap-3">
                  <img
                    src="/src/assets/mt5_icon.png"
                    alt="MetaTrader 5"
                    className="h-11 w-11"
                  />
                  <p className="text-lg font-semibold tracking-wide text-[#1a1f36]">
                    MetaTrader 5
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-3  gap-3 w-full">
                  {downloadPlatforms.map((platform) => (
                    <div
                      key={platform.label}
                      className="flex flex-col items-start text-left"
                    >
                      <div className="flex items-center gap-2">
                        <img
                          src={platform.icon}
                          alt={platform.label}
                          className="h-5 w-5"
                        />
                        <p className="text-sm font-semibold text-[#364063]">
                          {platform.label}
                        </p>
                      </div>

                      <button className="mt-3 flex items-center gap-1 text-[11px] font-semibold uppercase text-[#264abf] tracking-[0.15em]">
                        <Download className="h-4 w-4" />
                        Download
                      </button>

                      {/* Blue underline EXACT width */}
                      <span className="mt-2 block h-[3px] w-full bg-[#243c7c] rounded-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="relative flex-[2] rounded-lg border border-[#e8eaf2] bg-white p-8 shadow-sm">
              <div className="absolute top-0 left-0 h-16 w-1 rounded-full bg-[#b52c61]" />
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[#58648a]">
                  Overview
                </h3>
              </div>

              {/* Chart */}
              <div className="relative h-[300px]">
                <div className="absolute inset-0 flex flex-col justify-between">
                  {overviewTicks.map((tick) => (
                    <div key={tick} className="flex items-center gap-4">
                      <span className="w-12 text-right text-[11px] font-medium text-[#a1a6c6]">
                        {tick}
                      </span>
                      <div className="flex-1 border-t border-dashed border-[#e5e7f1]" />
                    </div>
                  ))}
                </div>

                <div className="absolute left-12 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-[#0d101f]" />
              </div>

              <div className="mt-6 grid grid-cols-12 text-center">
                {overviewMonths.map((month) => (
                  <span
                    key={month}
                    className="text-[11px] font-medium text-[#8b90ad]"
                  >
                    {month}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Affiliate trader open trade table */}
        <div className="rounded-md border border-[#e8eaf2] bg-white text-[#5a6388] mb-3">
          <div className="relative overflow-hidden">
            <span className="absolute left-0 top-0 h-full w-1 bg-[#b52c61]" />
            <div className="grid grid-cols-4 border-b border-[#f0f2f9] bg-white px-6 py-3 text-sm font-semibold">
              <span className="text-base">Account</span>
              <span className="text-base">Order</span>
              <span className="text-base">Open Time</span>
              <span className="text-base">Volume</span>
            </div>
          </div>
        </div>

        {/* Affiliate trader open trade table */}
        <div className="rounded-md border border-[#e8eaf2] bg-white text-[#5a6388] mb-3">
          <div className="relative overflow-hidden">
            <span className="absolute left-0 top-0 h-full w-1 bg-[#b52c61]" />
            <div className=" text-base border-b border-[#f0f2f9] px-6 py-4">
              No open trade available of your affiliate trader
            </div>
          </div>
        </div>

        {/* Affiliate trader open trade table */}
        <div className="rounded-md border border-[#e8eaf2] bg-white text-[#5a6388]">
          <div className="relative overflow-hidden">
            <span className="absolute left-0 top-0 h-full w-1 bg-[#b52c61]" />
            <div className="grid grid-cols-4 px-6 py-3 text-base font-semibold">
              <span>Total Volume</span>
              <span />
              <span />
              <span className="text-right text-[#2b3260]">0</span>
            </div>
          </div>
        </div>

        <DashboardFooter />
      </main>
    </Layout>
  );
}
