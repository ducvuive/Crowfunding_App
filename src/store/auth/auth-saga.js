import { all, takeLatest } from "redux-saga/effects";
import handleAuthRegister, {
  handleAuthLogin,
  handleAuthFetchMe,
  handleAuthRefreshToken,
} from "./auth-handlers";
import {
  authLogin,
  authRefreshToken,
  authRegister,
  authUpdateUser,
} from "./auth-slice";
export default function* authSaga() {
  yield takeLatest(authRegister.type, handleAuthRegister);
  yield takeLatest(authLogin.type, handleAuthLogin);
  yield takeLatest(authRefreshToken.type, handleAuthRefreshToken);
}
