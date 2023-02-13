import React from "react";
// lam nhung cai lien quan den error Boundary
//Error Boundary sẽ bắt lỗi của tất cả cả các component con,
//in ra các lỗi đó, và hiển thị ra một fallback UI (Một phẩn hiển thị dự phòng).
const ErrorComponent = () => {
  return (
    <div className="p-5 text-red-500 bg-red-200 rounded-lg">
      Look like component is error
    </div>
  );
};

export default ErrorComponent;
