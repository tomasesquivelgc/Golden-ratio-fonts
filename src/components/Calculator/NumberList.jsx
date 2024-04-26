import PropTypes from 'prop-types';

function NumberList({ calculatedNumbers }) {
  return (
    <div className="w-full h-gr1 items-center flex flex-col">
      <h2 className="text-gr3 md:text-gr2">Calculated</h2>
      <ul className=" w-gr2 text-center">
        {calculatedNumbers.map((number) => (
          <li className="text-gr4 md:text-gr3" key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default NumberList;

NumberList.propTypes = {
  calculatedNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
};
