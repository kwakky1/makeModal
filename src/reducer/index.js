import {combineReducers} from "redux";
import StartReducer from "./StartReducer";
import StartDateReducer from "./StartDateReducer";
import StartHourReducer from "./StartHourReducer";
import StartMinuteReducer from "./StartMinuteReducer";
import EndReducer from "./EndReducer";
import EndDateReducer from "./EndDateReducer";
import EndHourReducer from "./EndHourReducer";
import EndMinuteReducer from "./EndMinuteReducer";

const rootReducer = combineReducers({
    StartReducer,
    StartDateReducer,
    StartHourReducer,
    StartMinuteReducer,
    EndReducer,
    EndDateReducer,
    EndHourReducer,
    EndMinuteReducer
})

export default rootReducer;