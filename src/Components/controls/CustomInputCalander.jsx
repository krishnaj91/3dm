import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

const CustomInputCalendar = ({
  label,
  name,
  value,
  handleChange,
  error,
  required = false,
}) => {
  return (
    <div>
      <Form.Label htmlFor={name}>
        {label} {required && <span className="text-danger">*</span>}
      </Form.Label>
      <Form.Control
        type="date"
        name={name}
        value={value}
        onChange={handleChange}
        isInvalid={!!error}
      />
      <Form.Control.Feedback type="invalid" className="d-block">
        {error}
      </Form.Control.Feedback>
    </div>
  );
};

CustomInputCalendar.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
};

export default CustomInputCalendar;
