import React, {useId} from "react";

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
    const amountInputId = useId()
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor= {amountInputId} className="text-black/40 mb-2 inline-block">
                    {label} 
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}      
                    // use a checker to ensure onAmountChange is a function, using Number to convert input value to a number

                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>                                       
                            {currency.toUpperCase()}
                        </option>
                        // Remember to provide a key whenever using loops in jsx
                        // The value should be the currency code or name
                    ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;


