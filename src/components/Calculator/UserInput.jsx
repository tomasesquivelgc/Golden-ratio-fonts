import PropTypes from 'prop-types';

function UserInput({ calculateFonts }) {
  return (
    <div className="w-full h-gr2 bg-gold">
      <input
        type="number"
        onChange={(e) => calculateFonts(parseInt(e.target.value, 10))}
        placeholder="Enter your biggest font size"
        className="p-2"
      />
    </div>
  );
}

export default UserInput;

UserInput.propTypes = {
  calculateFonts: PropTypes.func.isRequired,
};
