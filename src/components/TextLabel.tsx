import { useId, SyntheticEvent, DetailedHTMLProps, InputHTMLAttributes, useMemo } from "react";

type TextInputProps = {
  name?: string
  label: string
  type: string
  placeholder?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  value?: number | string
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

function TextInput(props: TextInputProps) {
  const { name, label, type, value, required, placeholder, onChange, ...other } = props;

  const id = useId();

  const requiredToken = useMemo(() => {
    if (required) {
      return (
        <span>*</span>
      );
    }

    return null;
  }, [required]);

  return (
    <div className="flex flex-col gap-y-1">
      <label htmlFor={id}>{label}{requiredToken}</label>
      <input
        {...other}
        id={id}
        name={name}
        type={type}
        className="border-2 border-gray-400 rounded-md p-2"
        placeholder={placeholder}
        onChange={onChange}
        value={value}/>
    </div>
  );
}

export default TextInput;