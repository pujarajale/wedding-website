// This component handles the color selection for both text and background.
import { ChromePicker } from "react-color";

const ColorPicker = ({ label, color, onChange }) => {
  return (
    <div className="color-picker">
      <h3>{label}</h3>
      <ChromePicker color={color} onChangeComplete={onChange} />
    </div>
  );
};

export default ColorPicker;
