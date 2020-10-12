import {combineReducers} from "redux";
import DateReducer from "./DateReducer";
import StartHourReducer from "./StartHourReducer";
import StartMinuteReducer from "./StartMinuteReducer";
import EndHourReducer from "./EndHourReducer";
import EndMinuteReducer from "./EndMinuteReducer";

const rootReducer = combineReducers({
    DateReducer,
    StartHourReducer,
    StartMinuteReducer,
    EndHourReducer,
    EndMinuteReducer
})

export default rootReducer;