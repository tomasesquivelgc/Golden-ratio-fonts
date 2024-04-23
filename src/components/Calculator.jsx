import { useState } from "react";

function Calculator () {
  const [biggestNumber, setBiggestNumber] = useState(0);
  const [calculatedNumbers, setCalculatedNumbers] = useState([]);

  const calculateFonts = (input) => {
    const numbers = [];
    let currentNumber = input;

    for(let i = 0; i < 5; i++){
      currentNumber /= 1.618;
      numbers.push(parseFloat(currentNumber.toFixed(2)));
    }
    setCalculatedNumbers(numbers);
    setBiggestNumber(input);
  }

  return (
    <div className="w-full h-gr1 flex">
          <div className="w-gr2 h-full">
            {/* User Input */}
            <div className="w-full h-gr2 bg-gold">
              <input
                type="number"
                onChange={(e) => calculateFonts(parseInt(e.target.value))}
                placeholder="Enter your biggest font size"
                className="p-2"
              />
            </div>
            {/* Calculated numbers */}
            <div className="w-full h-gr1 bg-mikadoYellow">
              <ul>
                {calculatedNumbers.map((number, index) => (
                  <li key={index}>{number}</li>
                ))}
              </ul>
            </div>
          </div>
          {/* Golden sized text */}
          <div className="w-gr1 h-full bg-white overflow-y-scroll">
            <ul>
              <li style={{ fontSize: biggestNumber }}>Font Size {biggestNumber}px</li>
              {calculatedNumbers.map((number, index) => (
                <li key={index} style={{ fontSize: number }}>
                  Font Size {number}px
                </li>
              ))}
            </ul>
          </div>
        </div>
  )
}

export default Calculator;