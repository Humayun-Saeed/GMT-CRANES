import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function Input(props: InputProps) {
  const { label, ...inputProps } = props;

  return (
    <div className="w-full">
      <div className="flex flex-col w-full gap-[5px]">
        <label className="text-2xl font-semibold text-main-color-2" htmlFor="">
          {label}
        </label>
        <input
          {...inputProps}
          className="w-full p-[15px] leading-none text-lg font-medium bg-transparent border-[0.031rem] rounded-lg outline-none resize-none border-[black]/10 text-main-color-4 placeholder-main-color-4 focus:border-[black]" // Added focus:border-black here
        />
      </div>
    </div>
  );
}

export default Input;
