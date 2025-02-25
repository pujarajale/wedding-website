// This component allows the user to input and edit the text for the invitation.
const TextInput = ({ value, onChange }) => {
    return (
      <div className="text-input">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Enter names"
        />
      </div>
    );
  };
  
  export default TextInput;
  