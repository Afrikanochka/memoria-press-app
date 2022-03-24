import { combineReducers } from "redux";
// import persistReducer from "redux-persist/es/persistReducer";
// import storage from "redux-persist/lib/storage";
import studentsReducer from "./studentsReducer";

const rootReducer = combineReducers({
    students: studentsReducer,
  });
  
  export default rootReducer;