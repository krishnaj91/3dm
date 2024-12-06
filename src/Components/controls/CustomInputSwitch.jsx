import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

const CustomInputSwitch = ({
  label,
  required,
  name,
  value = false,
  handleChange,
  error,
}) => {
  return (
    <div>
      <Form.Label>
        {label} {required && <span className="text-danger">*</span>}
      </Form.Label>
      <div className="d-flex">
        <Form.Check
          type="switch"
          name={name}
          checked={value}
          isInvalid={!!error}
          onChange={handleChange}
        />
        <div onClick={handleChange}>{value ? "ON" : "OFF"}</div>
      </div>
      <div className="text-danger">{error}</div>
    </div>
  );
};

CustomInputSwitch.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  handleChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default CustomInputSwitch;
