import PropTypes from 'prop-types';
import { FaExchangeAlt } from 'react-icons/fa';

function UserInput({
  calculateFonts, setUnits, setIsSmall, isSmall,
}) {
  return (
    <div className="w-full h-gr2 flex flex-col items-center border-b text-center">
      <h2 className="text-gr3 md:text-gr2">
        {isSmall ? 'Smallest' : 'Biggest'}
      </h2>
      <button type="button" onClick={() => setIsSmall(!isSmall)} aria-label="Toggle direction">
        <FaExchangeAlt size={24} />
      </button>
      <div className="flex justify-center">
        <input
          type="number"
          onChange={(e) => calculateFonts(parseInt(e.target.value, 10))}
          className=" w-1/2 text-black m-2"
        />
        <select
          onChange={(e) => setUnits(e.target.value)}
          className="w-1/2 text-black m-2"
        >
          <option value="px">px</option>
          <option value="em">em</option>
          <option value="rem">rem</option>
          <option value="%">%</option>
          <option value="vh">vh</option>
        </select>
      </div>

    </div>
  );
}

export default UserInput;

UserInput.propTypes = {
  calculateFonts: PropTypes.func.isRequired,
  setUnits: PropTypes.func.isRequired,
  setIsSmall: PropTypes.func.isRequired,
  isSmall: PropTypes.bool.isRequired,
};
