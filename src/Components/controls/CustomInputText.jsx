import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

const CustomInputText = ({
  label,
  required = false,
  name,
  value,
  type,
  handleChange,
  placeholder,
  error,
}) => {
  return (
    <div>
      <Form.Label htmlFor={name}>
        {label} {required && <span className="text-danger">*</span>}
      </Form.Label>
      <Form.Control
        id={name}
        name={name}
        value={value}
        type={type}
        onChange={handleChange}
        placeholder={placeholder || label}
        aria-describedby="username-help"
        isInvalid={error}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </div>
  );
};

CustomInputText.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
};

export default CustomInputText;
