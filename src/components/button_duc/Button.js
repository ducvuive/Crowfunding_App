import React from "react";
import PropTypes from "prop-types";
const Button = (props) => {
  const {
    children,
    className = "",
    type = "",
    isLoading = false,
    ...rest
  } = props;
  const child = !!isLoading ? (
    <div className="w-5 h-5 border border-white rounded-full animate-spin border-t-transparent border-b-transparent"></div>
  ) : (
    children
  );
  return (
    <button
      className={`flex min-h-[52px] justify-center items-center
      ${!!isLoading ? "opacity-50 pointer-events-none" : ""}
       p-3 text-base font-semibold text-white ${className}`}
      type={type}
      {...rest}
    >
      {child}
    </button>
  );
};
Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
export default Button;
