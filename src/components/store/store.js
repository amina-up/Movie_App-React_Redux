import { createStore } from "redux";
import reducerMovie from "../reducers/reducer";

const store = createStore(
  reducerMovie,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
