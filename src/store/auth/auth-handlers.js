import { call } from "redux-saga/effects";
import { saveToken } from "../../utils/auth";
import { requestAuthLogin, requestAuthRegister } from "./auth-request";

export default function* handleAuthRegister(action) {
  const { payload } = action;
  try {
    const response = yield call(requestAuthRegister, payload);
    console.log("function*handleAuthRegister ~ response:", response);
  } catch (error) {
    console.log("handleAuthRegister ~ error:", error);
  }
}

function* handleAuthLogin({ action }) {
  // console.log("function*handleAuthLogin ~ action:", action);
  // yield 1;
  const { payload } = action;
  try {
    const response = yield call(requestAuthLogin, payload);
    console.log("function*handleAuthLogin ~ response", response);
    // accessToken, refreshToken
    if (response.data.accessToken && response.data.refreshToken) {
      saveToken(response.data.accessToken, response.data.refreshToken);
    }
    yield 1;
  } catch (error) {}
}
export { handleAuthLogin };
