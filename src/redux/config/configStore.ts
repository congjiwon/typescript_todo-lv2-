//중앙데이터관리소(state)를 설정하는 부분
import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todo";

const rootReducer = combineReducers({
  todos: todos,
});
const store = createStore(rootReducer);

export default store;
