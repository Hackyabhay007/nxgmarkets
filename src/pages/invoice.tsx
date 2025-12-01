// InvoicePage.tsx
import { Copy } from "lucide-react";
import toast from "react-hot-toast";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";

interface FormData {
  email: string;
  cryptoType: string;
  network: string;
  amountUSD: number;
  amountCrypto: number;
}

export default function InvoicePage() {
  const location = useLocation();
  const formData = location.state as FormData | null;

  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(t => t - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m ${s.toString().padStart(2, '0')}s`;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied!");
  };

  const walletAddresses: Record<string, string> = {
    BTC: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
    ERC20: "0x7a250d5630B4cF539739dF2C5dAcb4c4AEC51f1A",
    TRC20: "TXYZ123456789abcdef123456789abcdef1234",
    BEP20: "0x7a250d5630B4cF539739dF2C5dAcb4c4AEC51f1A",
    LTC: "Labc123456789LTCexampleaddress123456789",
  };

  const walletAddress = walletAddresses[formData?.network || 'BTC'] || walletAddresses.BTC;

  if (!formData) {
    return <div className="text-center py-20">No invoice data found.</div>;
  }

  return (
    <div className="w-full min-h-screen bg-[#F4F4F7]">
      <div className="w-full h-[240px] bg-gradient-to-br from-[#272B4D] to-[#3f51b5]"></div>

      <div className="max-w-4xl mx-auto -mt-32 px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Payment Invoice</h1>
            <img src="/src/assets/logo.png" alt="Logo" className="h-10" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-sm mb-8">
            <div>
              <p className="text-gray-600">Invoice ID</p>
              <p className="font-semibold">{crypto.randomUUID().slice(0, 32).toUpperCase()}</p>
            </div>
            <div>
              <p className="text-gray-600">Date</p>
              <p className="font-semibold">{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            </div>
            <div>
              <p className="text-gray-600">Email</p>
              <p className="font-semibold">{formData.email}</p>
            </div>
            <div>
              <p className="text-gray-600">Status</p>
              <span className="bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full text-xs font-medium">Awaiting Payment</span>
            </div>
          </div>

          <div className="border-t pt-8">
            <h2 className="text-xl font-bold mb-6">Send Exactly This Amount</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {/* Wallet Address */}
                <div>
                  <label className="text-gray-600 text-sm">Deposit Address ({formData.network})</label>
                  <div className="flex mt-2 border rounded-lg overflow-hidden">
                    <input
                      value={walletAddress}
                      readOnly
                      className="flex-1 px-4 py-3 bg-gray-50"
                    />
                    <button
                      onClick={() => copyToClipboard(walletAddress)}
                      className="bg-blue-600 text-white px-6 hover:bg-blue-700 transition"
                    >
                      <Copy className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Amount */}
                <div>
                  <label className="text-gray-600 text-sm">Amount to Send</label>
                  <div className="flex mt-2 border rounded-lg overflow-hidden">
                    <input
                      value={`${formData.amountCrypto} ${formData.cryptoType}`}
                      readOnly
                      className="flex-1 px-4 py-3 bg-gray-50 font-mono"
                    />
                    <button
                      onClick={() => copyToClipboard(formData.amountCrypto.toString())}
                      className="bg-blue-600 text-white px-6 hover:bg-blue-700"
                    >
                      <Copy className="h-5 w-5" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    ≈ ${formData.amountUSD.toFixed(2)} USD
                  </p>
                </div>

                {/* Timer */}
                <div className="text-red-600 font-bold">
                  Expires in: {formatTime(timeLeft)}
                </div>

                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-1000"
                    style={{ width: `${(timeLeft / (15 * 60)) * 100}%` }}
                  />
                </div>
              </div>

              {/* QR Code */}
              <div className="flex justify-center items-center">
                <div className="p-6 bg-white border-4 border-dashed rounded-xl">
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
                      `${formData.cryptoType.toLowerCase()}:${walletAddress}?amount=${formData.amountCrypto}`
                    )}`}
                    alt="Scan to pay"
                    className="w-56 h-56"
                  />
                  <p className="text-center text-sm text-gray-600 mt-4">Scan with your wallet</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm mt-12">
            Powered by <span className="font-bold text-blue-600">CryptoChill</span>
          </div>
        </div>
      </div>
    </div>
  );
}