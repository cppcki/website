import { SyntheticEvent } from "react";

type TextInputProps<T> = {
  name?: string
  label: string
  type: string
  placeholder?: string
  onChange?: (event: SyntheticEvent<T>) => void
  value?: number | string
}

function TextInput(props: TextInputProps<HTMLInputElement>) {
  const { name, label, type, value, placeholder, onChange } = props;
  return (
    <div className="flex flex-col gap-y-1">
      <label>{label}</label>
      <input
        name={name}
        type={type}
        className="border-2 border-gray rounded-md p-1"
        placeholder={placeholder}
        onChange={onChange}
        value={value}/>
    </div>
  );
}

export default TextInput;