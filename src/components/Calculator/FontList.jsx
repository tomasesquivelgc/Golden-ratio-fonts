import PropTypes from 'prop-types';

function FontList({ biggestNumber, calculatedNumbers }) {
  return (
    <div className="w-gr1 h-full overflow-auto text-center border-l">
      <h2 className="text-gr3 md:text-gr2">Font List</h2>
      <ul>
        <li style={{ fontSize: biggestNumber }}>
          Font Size
          {biggestNumber}
          px
        </li>
        {calculatedNumbers.map((number) => (
          <li key={number} style={{ fontSize: number }}>
            Font Size
            {' '}
            {number}
            px
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
};
