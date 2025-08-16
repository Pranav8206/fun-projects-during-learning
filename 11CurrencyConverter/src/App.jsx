import { useEffect, useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  useEffect(() => {
    setConvertedAmount(0);
  }, [from, to]);

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-center md:bg-cover bg-no-repeat px-4"
      style={{
        backgroundImage: `url("/bgImage.jpeg")`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto shadow-xl border border-gray-200 rounded-2xl p-6 backdrop-blur-md bg-white/40">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6 drop-shadow-sm">
            💱 Currency Converter
          </h1>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
            className="space-y-4"
          >
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />

            <div className="flex justify-center my-2">
              <button
                type="button"
                onClick={swap}
                className="flex items-center justify-center text-sm font-medium border-2 border-blue-500 rounded-full bg-blue-600 text-white px-5 py-2 hover:bg-blue-700 transition-all duration-200 shadow-md -mb-4 -mt-6"
              >
                🔄 Swap
              </button>
            </div>
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />

            <button
              type="submit"
              className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-4 py-3 rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
            >
              Convert {from.toUpperCase()} → {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
