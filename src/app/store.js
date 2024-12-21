import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { authApi } from "@/slices/api/authApi";


export const appStore = configureStore({
     reducer: rootReducer,
     // create middleware
     middleware: (defaultMiddleware) => defaultMiddleware().concat(
       authApi.middleware  
         )
    });