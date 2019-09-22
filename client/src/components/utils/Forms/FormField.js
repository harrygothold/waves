import React from "react";

const FormField = ({ formdata, change, id }) => {
  const renderTemplate = () => {
    let formTemplate = null;
    switch (formdata.element) {
      case "input":
        formTemplate = (
          <div className="formBlock">
            {formdata.showLabel && (
              <div className="label_inputs">{formdata.config.label}</div>
            )}
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
      case "select":
        formTemplate = (
          <div className="formBlock">
            {formdata.showLabel && (
              <div className="label_inputs">{formdata.config.label}</div>
            )}
            <select
              value={formdata.value}
              onBlur={e => change({ e, id, blur: true })}
              onChange={e => change({ e, id })}
            >
              <option value="">Select an option</option>
              {formdata.config.options.map(item => (
                <option key={item.key} value={item.key}>
                  {item.value}
                </option>
              ))}
            </select>
            {showError()}
          </div>
        );
        break;
      case "textarea":
        formTemplate = (
          <div className="formBlock">
            {formdata.showLabel && (
              <div className="label_inputs">{formdata.config.label}</div>
            )}
            <textarea
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
