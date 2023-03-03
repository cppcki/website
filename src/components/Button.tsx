"use client"

import React, { useCallback, useEffect, useRef } from "react";
import { debounce } from "lodash";
import Link from "next/link";

type ButtonProps = {
  className?: string;
  children?: React.ReactNode;
  variant?: Variant;
  disableDebounce?: boolean;
  href?: string
  onClick?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
}

const debounceConfig = {
  leading: true,
  trailing: false
};

type Variant = "outline" | "fill" | "none";

const variants: Record<Variant, string> = {
  outline: "border-2 border-gray-900 text-blue rounded-md hover:bg-gray-900 hover:text-white p-2 px-5",
  fill: "bg-gray-800 border-gray-800 text-white p-2 rounded-md hover:bg-gray-900 hover:bg-white border-2 hover:border-gray-800 hover:text-black p-2 px-5",
  none: "",
};

function Button(props: ButtonProps) {

  const { variant = "none", className, onClick, href, disableDebounce = false } = props;

  if (onClick !== undefined && href !== undefined) {
    throw new Error("Component props must consume either `onClick` or `href`");
  }

  const handleDebounce = useRef(debounce((event: React.SyntheticEvent<HTMLButtonElement>) => {
    if (!onClick) return;
    onClick(event);
  }, 500, debounceConfig)).current;

  const handleOnClick = useCallback((event: React.SyntheticEvent<HTMLButtonElement>) => {
    if (disableDebounce) {
      if (!onClick) return;
      onClick(event);
    } else {
      handleDebounce(event);
    }
  }, [handleDebounce, disableDebounce, onClick]);

  useEffect(() => {
    return () => {
      handleDebounce.cancel();
    };
  }, [handleDebounce]);

  if (href !== undefined) {
    return (
      <Link
        href={href}
        className={`${variants[variant]} ${className} transition-all`}>
        {props.children}
      </Link>
    );
  }

  return (
    <button
      onClick={handleOnClick}
      className={`${variants[variant]} ${className} transition-all`}>
      {props.children}
    </button>
  );
}

export default Button;