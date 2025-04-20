import React from "react";

const Button = ({
  children,
  type = "button",
  className = "",
  onClick,
  disabled = false,
  ...props
}) => {
  const baseClass = "btn btn-primary";
  const combinedClassName = className ? `${baseClass} ${className}` : baseClass;

  return (
    <button
      type={type}
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
