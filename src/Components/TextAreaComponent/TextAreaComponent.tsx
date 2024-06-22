import { TextareaHTMLAttributes } from "react";

interface TextareaComponentProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

function TextareaComponent(props: TextareaComponentProps) {
  const { label, ...textareaProps } = props;

  return (
    <div className="w-full">
      <div className="flex flex-col w-full gap-[0.25rem]">
        <label className="text-[1.5rem] font-semibold text-main-color-2" htmlFor="">
          {label}
        </label>
        <textarea
          {...textareaProps}
          className="w-full p-[0.3125rem] text-[0.9375rem] leading-none font-medium bg-transparent border-[0.0019375rem] rounded-lg outline-none resize-none border-[black]/10 focus:border-[black] text-main-color-4 placeholder-main-color-4"
        />
      </div>
    </div>
  );
}

export default TextareaComponent;
