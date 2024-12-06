import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";

const CustomInputSelect = ({
  label,
  required = false,
  name,
  value,
  options = [],
  handleChange,
  placeholder,
  error,
}) => {
  return (
    <div>
      <Form.Label htmlFor={name}>
        {label} {required && <span className="text-danger">*</span>}
      </Form.Label>
      <Form.Select
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        isInvalid={!!error}
      >
        <option value="" disabled>
          {placeholder || "Select an option"}
        </option>

        {options.length > 0 ? (
          options.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))
        ) : (
          <option value="" disabled>
            No options available
          </option>
        )}
      </Form.Select>
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </div>
  );
};

CustomInputSelect.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
};

export default CustomInputSelect;
