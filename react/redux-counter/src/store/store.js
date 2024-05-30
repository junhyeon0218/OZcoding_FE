import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk"; // 수정: 명명된 내보내기 사용
import counterReducer from "../reducer/reducers";

const store = createStore(counterReducer, applyMiddleware(thunk));

export default store;
