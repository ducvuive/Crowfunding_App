import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RequiredAuthPage = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user || !user.email) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  // nếu user tồn tại và user.email tồn tại thì return null
  // dung de no khong bi giat khi hien thi trang sign in vi no chay vao if truoc khi vao useEffect
  // neu khong co user thi nó trắng trang và sau đó chạy vào trang login
  if (!user || !user.email) return null;
  return <>{children}</>;
};

export default RequiredAuthPage;
