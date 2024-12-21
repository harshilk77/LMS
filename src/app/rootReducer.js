import { combineReducers } from "@reduxjs/toolkit"
import authReducer from "../slices/authSlice"
import { authApi } from "@/slices/api/authApi"

const rootReducer = combineReducers({
     // Add other slice reducers here
     [authApi.reducerPath]: authApi.reducer,
     auth: authReducer
})

export default rootReducer