import React from "react";

const FormField = ({ formdata, change, id }) => {
  const renderTemplate = () => {
    let formTemplate = null;
    switch (formdata.element) {
      case "input":
        formTemplate = (
          <div className="formBlock">
            <input
              {...formdata.config}
              value={formdata.value}
              onBlur={e => change({ e, id, blur: true })}
              onChange={e => change({ e, id })}
            />
            {showError()}
          </div>
        );
        break;

      default:
        return (formTemplate = null);
    }
    return formTemplate;
  };

  const showError = () => {
    let errorMessage = null;
    if (formdata.validation && !formdata.valid) {
      errorMessage = (
        <div className="error_label">{formdata.validationMessage}</div>
      );
    }
    return errorMessage;
  };
  return <div>{renderTemplate()}</div>;
};

export default FormField;
