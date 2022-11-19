import { SyntheticEvent } from "react";

type ButtonProps = {
  className?: string,
  children?: React.ReactNode
  onClick?: (event: SyntheticEvent) => void
}

function Button(props: ButtonProps) {

  const { className, onClick } = props;

  return (
    <button
      onClick={onClick}
      className={`bg-blue text-white p-2 rounded-md hover:bg-darkblue ${className}`}>
      {props.children}
    </button>
  );
}

export default Button;