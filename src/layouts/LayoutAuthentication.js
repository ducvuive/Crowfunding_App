import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// proptypes dung để
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/common/ErrorComponent";
import { useSelector } from "react-redux";

const LayoutAuthentication = (props) => {
  const { children, heading } = props;
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user && user.email) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  // nếu user tồn tại và user.email tồn tại thì return null
  // dung de no khong bi giat khi hien thi trang sign in vi no chay vao if truoc khi vao useEffect
  if (user && user.email) return null;
  return (
    <div className="relative w-full min-h-screen p-10 bg-lite dark:bg-darkbg isolate">
      <img
        src="/Ellips.png"
        alt="bg"
        className="hidden lg:block absolute bottom-0 left-0 right-0 pointer-events-none z-[-1]"
      />
      <Link to="/" className="inline-block mb-5 lg:mb-16">
        <img srcSet="/logo.png 2x" alt="crowfunding app" />
      </Link>
      <div className="w-full max-w-[556px] bg-white dark:bg-darkSecondary rounded-lg px-5 py-8 lg:px-16 lg:py-12 mx-auto">
        <h1 className="mb-2 text-lg font-semibold text-center lg:text-xl dark:text-white text-text1">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};

LayoutAuthentication.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node,
};

export default withErrorBoundary(LayoutAuthentication, {
  FallbackComponent: ErrorComponent,
});
