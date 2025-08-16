import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  const checkAmount = (amount)=> {
    if (amount ===0 || isNaN(amount)) {
        return ""
    }
    return amount;
  }

  return (
    <div
      className={`bg-white p-4 rounded-2xl shadow-md text-sm flex items-center justify-between gap-4 transition hover:shadow-lg ${className}`}
    >
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-gray-500 text-xs font-medium mb-1 block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-gray-800 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
          type="number"
          placeholder="Enter amount"
          disabled={amountDisable}
          value={checkAmount(amount)}
          onChange={(e) => onAmountChange(Number(e.target.value))}
        />
      </div>

      <div className="w-1/2 text-right">
        <p className="text-gray-500 text-xs font-medium mb-1">Currency</p>
        <select
          className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 text-gray-800 cursor-pointer focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency} className="text-gray-700">
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
