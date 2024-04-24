import PropTypes from 'prop-types';

function NumberList({ calculatedNumbers }) {
  return (
    <div className="w-full h-gr1 items-center flex flex-col">
      <h2>Calculated Numbers</h2>
      <ul>
        {calculatedNumbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default NumberList;

NumberList.propTypes = {
  calculatedNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
};
