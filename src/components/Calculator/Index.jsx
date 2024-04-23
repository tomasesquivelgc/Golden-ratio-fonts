import { useState } from "react";
import UserInput from "./UserInput";
import NumberList from "./NumberList";
import FontList from "./FontList";

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
            <UserInput calculateFonts={calculateFonts} />
            <NumberList calculatedNumbers={calculatedNumbers} />
          </div>
          {/* Golden sized text */}
          <FontList biggestNumber={biggestNumber} calculatedNumbers={calculatedNumbers} />
        </div>
  )
}

export default Calculator;