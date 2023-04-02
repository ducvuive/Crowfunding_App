import { call, put } from "redux-saga/effects";
import { saveToken } from "../../utils/auth";
import {
  requestAuthFetchMe,
  requestAuthLogin,
  requestAuthRegister,
} from "./auth-request";
import { toast } from "react-toastify";
import { authUpdateUser } from "./auth-slice";

export default function* handleAuthRegister(action) {
  const { payload } = action;
  try {
    const response = yield call(requestAuthRegister, payload);
    console.log("function*handleAuthRegister ~ response:", response);
  } catch (error) {
    console.log("handleAuthRegister ~ error:", error);
  }
}

function* handleAuthLogin(action) {
  // console.log("function*handleAuthLogin ~ action:", action);
  // yield 1;
  const { payload } = action;
  console.log("function*handleAuthLogin ~ payload:", payload);
  try {
    const response = yield call(requestAuthLogin, payload);
    console.log("function*handleAuthLogin ~ response", response);
    // accessToken, refreshToken
    if (response.data.accessToken && response.data.refreshToken) {
      yield call(handleAuthFetchMe, { payload: response.data.accessToken });
    }
  } catch (error) {
    const response = error.response.data;
    if (response.statusCode === 403) {
      toast.error(response.error.message);
      return;
    }
  }
}
function* handleAuthFetchMe({ payload }) {
  try {
    const response = yield call(requestAuthFetchMe, payload);
    if (response.status === 200) {
      yield put(
        authUpdateUser({
          user: response.data,
          accessToken: payload,
        })
      );
    }
    // response.data -> userInfo
  } catch (error) {}
}

export { handleAuthLogin, handleAuthFetchMe };
