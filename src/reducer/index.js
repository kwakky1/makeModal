import {combineReducers} from "redux";
import StartReducer from "./StartReducer";
import EndReducer from "./EndReducer";

const rootReducer = combineReducers({
    StartReducer,
    EndReducer,
})

export default rootReducer;