import { useMemo, useId, HTMLAttributes } from "react";

type Option = number | string;

type OptionInputProps<T> = {
  label: string;
  data: T[];
} & React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

function OptionInput<T extends Option>(props: OptionInputProps<T>) {
  const { label, data, ...other } = props;

  const id = useId();

  const options = useMemo(() => {
    return data?.map((value) => {
      return (
        <option key={value}>{value}</option>
      );
    });
  }, [data]);

  return (
    <div className="flex flex-col gap-y-1">
      <label htmlFor={id}>{label}</label>
      <select
        {...other} 
        id={id} 
        className="border-2 border-gray-400 rounded-md p-2">
        {options}
      </select>
    </div>
  );
}

export default OptionInput;