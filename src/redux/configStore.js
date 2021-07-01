//완료
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import word from "./modules/word";
import {createBrowserHistory} from "history";

const middlewares = [thunk];

export const history = createBrowserHistory();

const enhancer = applyMiddleware(...middlewares);//store에 middleware 중 한개인 thunk 넣었다. (파이어 스토어에 있는 데이터 가져와서 쓰려면 비동기 통신 해야하므로)
const rootReducer = combineReducers({ word });
const store = createStore(rootReducer, enhancer);

export default store;
