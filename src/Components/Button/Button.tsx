import { ButtonHTMLAttributes, ReactNode } from "react";

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  buttonStyle?: string;
}

function Button(props: Button) {
  const { children, buttonStyle, ...buttonProps } = props;

  return (
    <div>
      <button
        className={`text-lg font-semibold text-white px-10 py-4 leading-5 bg-main-color-2 rounded-xl ${buttonStyle}`}
        {...buttonProps}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
