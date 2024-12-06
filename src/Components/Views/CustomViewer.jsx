import { useState } from "react";
import ComponentMap from "../../Utils/ComponentMap";
import { Button, Spinner } from "react-bootstrap";
import PropTypes from "prop-types";

const CustomViewer = ({
  formStateConfig,
  handleSubmit,
  handleClose,
  loading,
  formData,
  setFormData,
}) => {
  const formFields = formStateConfig;
  console.log(formFields, "45678");
  console.log(formData, "45678-formData");
  const [error, setError] = useState({});

  const handleFieldChange = (e, field) => {
    field.type === "switch"
      ? setFormData({
          ...formData,
          [field.name]: e.target.checked,
        })
      : setFormData({
          ...formData,
          [field.name]: e.target.value,
        });
    setError({ ...error, [field.name]: null });
  };

  const handleSubmitClick = () => {
    const fieldErrors = {};
    Object.keys(formData).forEach((item) => {
      const value = formData[item];
      const fields = formFields.find((data) => data.name === item);

      if (fields.required && !value) {
        fieldErrors[item] = `${fields.label} is required`;
      }
    });
    setError(fieldErrors);
    if (Object.keys(fieldErrors).length === 0) {
      handleSubmit();
    }
  };

  return (
    <div>
      <div className="test1 p-3">
        {Object.keys(formData).map((item, index) => {
          const field = formFields.find((data) => data.name === item);

          const InputField = ComponentMap[field.type || "text"];
          return (
            <div key={index} className="mb-3">
              <InputField
                label={field.label}
                name={field.name}
                value={formData[item]}
                required={field.required}
                options={field.options}
                handleChange={(e) => {
                  handleFieldChange(e, field);
                }}
                error={error[item]}
              />
            </div>
          );
        })}
      </div>
      <div className="test">
        <div className="d-flex justify-content-end align-items-center gap-3 m-3">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleSubmitClick}
            disabled={loading}
          >
            {loading && (
              <span className="me-2">
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              </span>
            )}
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

CustomViewer.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  formStateConfig: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

export default CustomViewer;
