import PropTypes from 'prop-types';

function FontList({ biggestNumber, calculatedNumbers }) {
  return (
    <div className="w-gr1 h-full bg-white overflow-y-scroll">
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
