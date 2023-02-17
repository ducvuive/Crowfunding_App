import React from "react";
import { useController } from "react-hook-form";

const Textarea = (props) => {
  const { control, name, children, placeholder = "", ...rest } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <textarea
      className="w-full px-6 py-4 text-sm font-medium bg-transparent border border-strock text-text1 dark:border-darkStroke 
      rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white
      min-h-[140px] resize-none outline-none"
      placeholder={placeholder}
      {...field}
      {...rest}
    >
      {children}
    </textarea>
  );
};

export default Textarea;
