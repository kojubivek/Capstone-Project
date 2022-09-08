import "./form-input.styles.scss";
const FormInput = ({ lable, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      <label className={`${otherProps.value ? "shrink" : ""} form-input-label`}>
        {lable}
      </label>
    </div>
  );
};

export default FormInput;
