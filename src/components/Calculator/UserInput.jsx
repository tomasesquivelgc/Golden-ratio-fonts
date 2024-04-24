import PropTypes from 'prop-types';

function UserInput({ calculateFonts }) {
  return (
    <div className="w-full h-gr2 flex flex-col items-center border-b">
      <h2 className="text-center">Enter your biggest font size</h2>
      <input
        type="number"
        onChange={(e) => calculateFonts(parseInt(e.target.value, 10))}
        placeholder="Enter your biggest font size"
        className="p-2 w-1/2 text-black"
      />
    </div>
  );
}

export default UserInput;

UserInput.propTypes = {
  calculateFonts: PropTypes.func.isRequired,
};
