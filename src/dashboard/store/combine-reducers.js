import { combineReducers } from "@reduxjs/toolkit";
import departmentsReducer from "./departments-reducer";

import doctorsReducer from "./doctors-reducer";
import regularScheduleReducer from "./regularSchedule-reducer";
import userReducer from "./user-reducer";

export const entitiesReducer = combineReducers({
	user: userReducer,
	doctors: doctorsReducer,
	departments: departmentsReducer,
	regularSchedule: regularScheduleReducer,
});
