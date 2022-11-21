import { SyntheticEvent } from "react";

type ButtonProps = {
  className?: string
  children?: React.ReactNode
  design?: string
  onClick?: (event: SyntheticEvent) => void
}

function Button(props: ButtonProps) {

  const { design, className, onClick } = props;

  if (design === "outline") {
    return (
      <button
        onClick={onClick}
        className={`border-2 border-blue text-blue p-1 rounded-md hover:bg-blue hover:text-white ${className}`}>
        {props.children}
      </button>
    );
  }

  if (design === "none") {
    return (
      <button
        onClick={onClick}
        className={`rounded-md ${className}`}>
        {props.children}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`bg-blue text-white p-2 rounded-md hover:bg-darkblue ${className}`}>
      {props.children}
    </button>
  );
}

export default Button;