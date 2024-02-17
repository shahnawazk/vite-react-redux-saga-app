import { call, put, takeLatest } from "redux-saga/effects";
import { GET_USERS_REQUEST, GET_USERS_SUCCESS } from "./constants";

function usersRequest() {
  return fetch("https://reqres.in/api/users?page=1&delay=5").then((res) =>
    res.json()
  );
}

function* workerGetUsersRequest() {
  const users = yield call(usersRequest);
  yield put({ type: GET_USERS_SUCCESS, users });
}

function* rootSaga() {
  yield takeLatest(GET_USERS_REQUEST, workerGetUsersRequest);
}

export default rootSaga;
