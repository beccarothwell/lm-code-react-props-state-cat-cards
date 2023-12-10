import classnames from "classnames";
import { ChangeEventHandler } from "react";

interface AddPetFormInputProps {
  label: string;
  type: string;
  name: string;
  id: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  validationError?: string;
}

const AddPetFormInput: React.FC<AddPetFormInputProps> = (props) => {
  const { label, type, name, id, value, onChange, validationError } = props;

  return (
    <label
      className={classnames(
        "add-pet__input-label",
        validationError && "add-pet__input-label--error"
      )}
    >
      {`${label}: `}
      <input
        className="add-pet__input"
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      />
      {validationError && (
        <span className="add-pet__input-error" aria-live="polite">
          {validationError}
        </span>
      )}
    </label>
  );
};

export default AddPetFormInput;
