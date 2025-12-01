import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  HomeIcon,
  UserIcon,
  TradingIcon,
  BankIcon,
  RocketIcon,
  ReportIcon,
  SupportIcon,
  SettingsIcon,
  BonusesIcon,
} from "../icons/icons";
import { useNavigate } from "react-router-dom";


const sidebarItems = [
  {
    id: "my-admin",
    label: "My Admin",
    icon: UserIcon,
    type: "dropdown",
    subItems: [
      {
        id: "profile-overview",
        label: "Profile Overview",
        route: "/user/profile",
      },
      { id: "settings", label: "Settings", route: "/user/settings" },
      {
        id: "verification",
        label: "Verification",
        route: "/user/verification",
      },
      { id: "banking", label: "Banking", route: "/user/banking" },
      { id: "upi", label: "UPI", route: "/user/upi" },
    ],
  },
  {
    id: "trading-accounts",
    label: "Trading Accounts",
    icon: TradingIcon,
    type: "dropdown",
    subItems: [
      {
        id: "mt4",
        label: "Open Demo Account",
        route: "/user/open-demo-account",
      },
      {
        id: "mt5",
        label: "Open Live Account",
        route: "/user/open-live-account",
      },
      {
        id: "crm",
        label: "Trading Account Settings",
        route: "/user/trading-account-settings",
      },
    ],
  },
  {
    id: "deposit",
    label: "Deposit",
    icon: BankIcon,
    type: "dropdown",
    subItems: [
      {
        id: "local-bank",
        label: "Local Bank",
        route: "/user/deposit/local-bank",
      },
      { id: "upi-auto", label: "UPI Auto", route: "/user/deposit/upi-auto" },
      {
        id: "crypotchill",
        label: "CryptoChill",
        route: "/user/deposit/crypto-chill",
      },
      {
        id: "myfatoorah",
        label: "Myfatoorah",
        route: "/user/deposit/myfatoorah",
      },
      {
        id: "ccheezeeupi",
        label: "Cheezee UPI",
        route: "/user/deposit/ccheezeeupi",
      },
      { id: "spayz", label: "SPayz", route: "/user/deposit/spayz" },
      { id: "cash", label: "Cash", route: "/user/deposit/cash" },
      { id: "monumpay", label: "Monumpay", route: "/user/deposit/monumpay" },
    ],
  },
  {
    id: "withdraw",
    label: "Withdraw",
    icon: BankIcon,
    type: "dropdown",
    subItems: [
      {
        id: "bank-withdraw",
        label: "Bank Withdraw",
        route: "/user/withdraw/bank-withdraw",
      },
      {
        id: "cheezee-upi-withdraw",
        label: "Cheezee UPI Withdraw",
        route: "/user/withdraw/cheezee-upi-withdraw",
      },
      {
        id: "spayz",
        label: "SPayz Withdraw",
        route: "/user/withdraw/spayz-withdraw",
      },
      {
        id: "upi-auto-withdraw",
        label: "UPI Auto Withdraw",
        route: "/user/withdraw/upi-withdraw",
      },
      {
        id: "okpay-withdraw",
        label: "Okpay Withdraw",
        route: "/user/withdraw/okpay-withdraw",
      },
      {
        id: "crypto-chill-withdraw",
        label: "CryptoChill Withdraw",
        route: "/user/withdraw/crypto-chill-withdraw",
      },
      {
        id: "myfatoorah-withdraw",
        label: "Myfatoorah Withdraw",
        route: "/user/withdraw/myfatoorah-withdraw",
      },
      {
        id: "monumpay-withdraw",
        label: "Monumpay Withdraw",
        route: "/user/withdraw/monumpay-withdraw",
      },
      {
        id: "cash-withdraw",
        label: "Cash Withdraw",
        route: "/user/withdraw/cash-withdraw",
      },
    ],
  },
  {
    id: "transfer",
    label: "Transfer",
    icon: RocketIcon,
    type: "dropdown",
    subItems: [
      {
        id: "wallet-to-account",
        label: "Wallet to Account",
        route: "/transfer/wallet-to-account",
      },

      {
        id: "account-to-wallet",
        label: "Account to Wallet",
        route: "/transfer/account-to-wallet",
      },
    ],
  },
  {
    id: "reports",
    label: "Reports",
    icon: ReportIcon,
    type: "dropdown",
    subItems: [
      {
        id: "deposit-report",
        label: "Deposit Report",
        route: "/reports/deposit-report",
      },
      {
        id: "withdraw-report",
        label: "Withdraw Report",
        route: "/reports/withdraw-report",
      },
      {
        id: "deposit-report",
        label: "External Transfer Report",
        route: "/reports/external-transfer-report",
      },
      {
        id: "internal-transfer-report",
        label: "Internal Transfer Report",
        route: "/reports/internal-transfer-report",
      },
      {
        id: "trading-report",
        label: "Trading Report",
        route: "/reports/trading-report",
      },
    ],
  },
  {
    id: "support",
    label: "Support",
    icon: SupportIcon,
    type: "dropdown",
    subItems: [
      {
        id: "support-ticket",
        label: "Support Ticket",
        route: "/support/ticket",
      },
    ],
  },
  {
    id: "copy-trading",
    label: "Copy Trading",
    icon: SettingsIcon,
    type: "dropdown",
    subItems: [
      {
        id: "provider",
        label: "Provider",
        route: "/copy-trading/provider",
      },
      {
        id: "follower",
        label: "Follower",
        route: "/copy-trading/follower",
      },
      {
        id: "leaderboard",
        label: "Leaderboard",
        route: "/copy-trading/leaderboard",
      },
      {
        id: "contest",
        label: "Contest",
        route: "/copy-trading/contest",
      },
    ],
  },
  {
    id: "pamm",
    label: "Pamm",
    icon: SettingsIcon,
    type: "dropdown",
    subItems: [
      {
        id: "money-manager",
        label: "Money Manager",
        route: "/pamm/money-manager",
      },
      {
        id: "investor",
        label: "Investor",
        route: "/pamm/investor",
      },
      {
        id: "leaderboard",
        label: "Leaderboard",
        route: "/pamm/leaderboard",
      },
      {
        id: "contest",
        label: "Contest",
        route: "/pamm/contest",
      },
    ],
  },
  {
    id: "contest",
    label: "Contest",
    icon: RocketIcon,
    type: "dropdown",
    subItems: [
      {
        id: "leaderboard",
        label: "Leaderboard",
        route: "/contest/leaderboard",
      },
      {
        id: "contest-dashboard",
        label: "Contest List",
        route: "/contest/contest-list",
      },
    ],
  },
  {
    id: "Bonuses",
    label: "Bonuses",
    icon: BonusesIcon,
    type: "dropdown",
    subItems: [
      {
        id: "my-bonuses",
        label: "My Bonuses",
        route: "/bonuses/my-bonuses",
      },
      {
        id: "all-bonuses",
        label: "All Bonuses",
        route: "/bonuses/all-bonuses",
      },
      {
        id: "my-points",
        label: "My Points",
        route: "/bonuses/my-points",
      },
    ],
  },
];

export default function Sidebar() {
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({
    "my-admin": true,
  });
  const [depositCrypto, setDepositCrypto] = useState(false)
  const [activeItem] = useState<string>("dashboard");
  const navigate = useNavigate();


  const toggleDropdown = (id: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleItemClick = (path: string) => {
    console.log('Parh' , path)
    if (path === '/user/dashboard' || path ==='/user/deposit/crypto-chill') {
      navigate(path);
      return;
    }
    setDepositCrypto(true)

  };

  return (
    <div className="w-64 bg-white h-screen shadow-lg flex flex-col rounded-xl">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <img src={"/src/assets/logo.png"} alt="logo" className="h-8" />
      </div>

      <nav className="flex-1 overflow-y-auto py-4">
        <div>
          <button
            onClick={() => {
              handleItemClick("/user/dashboard");
            }}
            className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-colors`}
          >
            <div className="flex items-center gap-3">
              <div className="bg-[#b52c61] rounded-md p-2.5">
                <HomeIcon fill="#ffffff" className="w-3 h-3" />
              </div>
              <span className="font-medium">Dashboard</span>
            </div>
          </button>
        </div>

        {sidebarItems.map((item) => (
          <div key={item.id} className={`border-b border-gray-200`}>
            <button
              onClick={() => {
                if (item.type === "dropdown") {
                  toggleDropdown(item.id);
                }
              }}
              className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-colors`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`${activeItem === item.id ? "bg-[#b52c61]" : ""
                    } rounded-md p-2`}
                >
                  <item.icon
                    fill={activeItem === item.id ? "#ffffff" : "#b52c61"}
                    className={`w-3 h-3`}
                  />
                </div>
                <span
                  className={`text-gray-900 ${activeItem === item.id ? "opacity-100" : "opacity-50"
                    } font-medium`}
                >
                  {item.label}
                </span>
              </div>

              {item.type === "dropdown" &&
                (openDropdowns[item.id] ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                ))}
            </button>

            {/* Sub Items */}
            {item.type === "dropdown" &&
              openDropdowns[item.id] &&
              item.subItems && (
                <div className="bg-gray-50">
                  {item.subItems.map((subItem) => (
                    <button
                      key={subItem.id}
                      onClick={() => handleItemClick(subItem.route)}
                      className={`w-full flex items-center gap-3 px-5 py-2.5 text-sm transition-colors`}
                    >
                      <span
                        className={`w-1 h-1 rounded-full ${activeItem === subItem.id ? "bg-white" : "bg-gray-400"
                          }`}
                      ></span>
                      <span
                        className={`text-gray-900 ${activeItem === subItem.id
                          ? "opacity-100"
                          : "opacity-50"
                          } font-medium`}
                      >
                        {subItem.label}
                      </span>
                    </button>
                  ))}
                </div>
              )}
          </div>
        ))}
      </nav>

      {/* CryptoChill Deposit Popup */}
      {depositCrypto && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Deposit</h3>
              <button
                onClick={() => setDepositCrypto(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <p>Please go to the Dashboard to make a deposit.</p>
              <button
                onClick={() => {
                  navigate('/user/dashboard');
                  setDepositCrypto(false);
                }}
                className="w-full bg-[#b52c61] text-white py-2 px-4 rounded-md hover:bg-[#9a2451] transition-colors"
              >
                Go to Dashboard
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
