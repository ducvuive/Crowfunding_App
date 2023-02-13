import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import classNames from "../../utils/className";

const Input = (props) => {
  const {
    control,
    name,
    type = "text",
    children,
    error = "",
    placeholder = "",
    ...rest
  } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        className={classNames(
          "w-full px-6 py-4 text-sm font-medium border rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white bg-transparent",
          error.length > 0
            ? "border-error text-error"
            : "border-strock text-text1 dark:border-darkStroke",
          children ? "pr-16" : ""
        )}
        // className={`w-full px-6 py-4 text-sm font-medium border rounded-xl  placeholder:text-text4 dark:placeholder:text-text2 dark:text-white bg-transparent ${
        //   error.length > 0
        //     ? "border-error text-error"
        //     : "border-strock text-text1 dark:border-darkStroke"
        // } ${children ? "pr-16" : ""}`}
        placeholder={error.length <= 0 ? placeholder : ""}
        {...rest}
        {...field}
      />
      {error.length > 0 && (
        <span className="absolute text-sm font-medium pointer-events-none text-error top-2/4 -translate-y-2/4 left-6 error-input">
          {error}
        </span>
      )}
      {/* select none dung de khi an vao con mat thi no se boi đen cái chữ phía dưới */}
      {/* su ly giao dien con mat */}
      <span className="absolute cursor-pointer select-none top-2/4 -translate-y-2/4 right-6">
        {children}
      </span>
    </div>
  );
};
Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  control: PropTypes.any.isRequired,
};
export default Input;
