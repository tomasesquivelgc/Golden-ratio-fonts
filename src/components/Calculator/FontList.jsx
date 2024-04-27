import PropTypes from 'prop-types';

function FontList({ biggestNumber, calculatedNumbers, units }) {
  return (
    <div className="w-gr1 h-full overflow-auto text-center border-l flex flex-col">
      <h2 className="text-gr3 md:text-gr2 border-b p-0 m-1 max-w-fit self-center">Font List</h2>
      <ul>
        <li style={{ fontSize: biggestNumber + units }}>
          Font Size
          {' '}
          {biggestNumber}
          {units}
        </li>
        {calculatedNumbers.map((number) => (
          <li key={number} style={{ fontSize: number + units }}>
            Font Size
            {' '}
            {number}
            {units}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FontList;

FontList.propTypes = {
  biggestNumber: PropTypes.number.isRequired,
  calculatedNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  units: PropTypes.string.isRequired,
};
