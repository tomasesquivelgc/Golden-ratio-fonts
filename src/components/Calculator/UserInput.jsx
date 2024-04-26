import PropTypes from 'prop-types';

function UserInput({ calculateFonts }) {
  return (
    <div className="w-full h-gr2 flex flex-col items-center border-b text-center">
      <h2 className="text-gr3 md:text-gr2 h-gr1 w-gr1">Biggest</h2>
      <input
        type="number"
        onChange={(e) => calculateFonts(parseInt(e.target.value, 10))}
        className=" w-gr4 text-black m-2"
      />
    </div>
  );
}

export default UserInput;

UserInput.propTypes = {
  calculateFonts: PropTypes.func.isRequired,
};
