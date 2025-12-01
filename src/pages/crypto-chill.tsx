import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Layout from "../layouts/layout";
import Navbar from "../components/navbar";
import DashboardFooter from "../components/dashboard-footer";
import Select from "react-select";
import useUser from "../hooks/useUser";
import type { StylesConfig } from 'react-select';

const breadcrumb = [
  { title: "Dashboard", route: "/dashboard" },
  { title: "Crypto Chill Deposit", route: "/user/deposit/crypto-chill" },
];

const cryptoOptions = [
  { value: "BTC", label: "Bitcoin (BTC)" },
  { value: "LTC", label: "Litecoin (LTC)" },
  { value: "ETH", label: "Ethereum (ETH)" },
  { value: "USDT", label: "Tether (USDT)" },
];

const networkOptions = [
  { value: "BTC", label: "Bitcoin Network" },
  { value: "ERC20", label: "Ethereum (ERC20)" },
  { value: "TRC20", label: "Tron (TRC20)" },
  { value: "BEP20", label: "Binance Smart Chain (BEP20)" },
  { value: "LTC", label: "Litecoin Network" },
];

const customStyles: StylesConfig<any> = {
  control: (provided, state) => ({
    ...provided,
    borderRadius: "8px",
    borderColor: state.isFocused ? "#b01a51" : "#d1d5db",
    boxShadow: state.isFocused ? "0 0 0 1px #b21f54" : "none",
    padding: "2px",
    "&:hover": {
      borderColor: "#b21f54",
    },
  }),

  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#b21f54"
      : state.isFocused
        ? "#fce4ec"
        : "white",
    color: state.isSelected ? "white" : "#374151",
  }),
};

interface FormData {
  email: string;
  cryptoType: string;     
  network: string;         
  amountUSD: number;
  amountCrypto: number;
}

export default function CryptoChill() {
  const navigate = useNavigate();
  const { user } = useUser();

  const [formData, setFormData] = useState<FormData>({
    email: user?.email || '',
    cryptoType: '',
    network: '',
    amountUSD: 0,
    amountCrypto: 0,
  });

  useEffect(() => {
    if (user?.email) {
      setFormData(prev => ({ ...prev, email: user.email }));
    }
  }, [user]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name.includes('amount') ? parseFloat(value) || 0 : value
    }));
  };

  const handleSelectChange = (selectedOption: any, action: any) => {
    const name = action.name;
    if (name && selectedOption) {
      setFormData(prev => ({
        ...prev,
        [name]: selectedOption.value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.cryptoType || !formData.network || formData.amountUSD <= 0) {
      alert("Please fill all fields correctly");
      return;
    }

    const fakeRates: Record<string, number> = {
      BTC: 88400,
      ETH: 3400,
      LTC: 95,
      USDT: 1,
    };

    const rate = fakeRates[formData.cryptoType] || 1;
    const amountCrypto = formData.amountUSD / rate;

    const finalData = {
      ...formData,
      amountCrypto: parseFloat(amountCrypto.toFixed(8))
    };

    navigate('/user/invoice', { state: finalData });
  };

  return (
    <Layout>
      <Navbar breadcrumb={breadcrumb} balance={0} />

      <main className="flex-1 flex justify-center py-10 px-4">
        <div className="flex justify-center items-center w-full max-w-4xl bg-white shadow-lg rounded-xl p-10">
          <div className="max-w-2xl">
            <h1 className="text-gray-500 text-xl font-semibold text-center mb-2">
              Crypto Chill Deposit
            </h1>
            <p className="text-center text-gray-500 mb-8">
              Make a request for online deposit. It’s very simple and fast.
            </p>

            {/* FORM */}
            <form className="space-y-6" onSubmit={handleSubmit}>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-left text-sm font-semibold text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  defaultValue={formData?.email}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C41E5B] focus:border-transparent text-gray-700"
                  disabled
                />
              </div>

              {/* Crypto Type */}
              <div>
                <label
                  htmlFor="select"
                  className="block text-left text-sm font-semibold text-gray-700 mb-2"
                >
                  Crypot Symbol
                </label>
                <Select
                  options={cryptoOptions}
                  styles={customStyles}
                  isSearchable={true}
                  placeholder="e.g., BTC, ETH, USDT"
                  name="cryptoType"
                  onChange={handleSelectChange}
                  value={cryptoOptions.find(opt => opt.value === formData.cryptoType) || null}
                />
              </div>

              {/* Crypto Currency */}

              <div>
                <label
                  htmlFor="select"
                  className="block text-left text-sm font-semibold text-gray-700 mb-2"
                >
                  Crypot Curreny
                </label>
                <Select
                  options={networkOptions}
                  isSearchable={true}
                  styles={customStyles}
                  placeholder="e.g., ERC20, TRC20"
                  name="network"
                  onChange={handleSelectChange}
                  value={networkOptions.find(opt => opt.value === formData.network) || null}
                />
              </div>

              {/* Amount USD */}
              <div>
                <label
                  htmlFor="number"
                  className="block text-left text-sm font-semibold text-gray-700 mb-2"
                >
                  Amount (USD)
                </label>              <input
                  type="number"
                  name="amountUSD"
                  value={formData.amountUSD || ''}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C41E5B] focus:border-transparent text-gray-700"
                  placeholder="100.00"
                  min="10"
                  step="0.01"
                  required
                />
              </div>

              {/* Amount */}
              <div>
                <label
                  htmlFor="number"
                  className="block text-left text-sm font-semibold text-gray-700 mb-2"
                >
                  Amount (ETH)
                </label>              <input
                  type="number"
                  value={formData.amountCrypto}
                  onChange={(e)=>{setFormData({...formData  , amountCrypto:Number(e.target.value)})}}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C41E5B] focus:border-transparent text-gray-700"
                  min="10"
                  step="0.01"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full  bg-[#b52c61] text-white py-3 rounded-md hover:bg-[#b01a51] transition"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </main>

      <DashboardFooter />
    </Layout>
  );
}