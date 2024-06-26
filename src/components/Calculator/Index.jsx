import { useState } from 'react';
import UserInput from './UserInput';
import NumberList from './NumberList';
import FontList from './FontList';

function Calculator() {
  const [biggestNumber, setBiggestNumber] = useState(0);
  const [calculatedNumbers, setCalculatedNumbers] = useState([]);
  const [units, setUnits] = useState('px');
  const [isSmall, setIsSmall] = useState(false);

  const calculateFonts = (input) => {
    if (!Number.isNaN(input)) {
      const numbers = [];
      let currentNumber = input;

      for (let i = 0; i < 4; i += 1) {
        if (isSmall) {
          currentNumber *= 1.618;
        } else {
          currentNumber /= 1.618;
        }
        // Round the current number to two decimal places
        numbers.push(parseFloat(currentNumber.toFixed(2)));
      }
      setCalculatedNumbers(numbers);
      setBiggestNumber(input);
    } else {
      // If input is not a valid number, reset the calculated numbers and biggest number
      setCalculatedNumbers([]);
      setBiggestNumber(0);
    }
  };

  return (
    <section id="calculator" className="w-full h-gr1 flex text-white">
      <div className="w-gr2 h-full">
        <UserInput
          calculateFonts={calculateFonts}
          setUnits={setUnits}
          setIsSmall={setIsSmall}
          isSmall={isSmall}
        />
        <NumberList calculatedNumbers={calculatedNumbers} />
      </div>
      {/* Golden sized text */}
      <FontList biggestNumber={biggestNumber} calculatedNumbers={calculatedNumbers} units={units} />
    </section>
  );
}

export default Calculator;
