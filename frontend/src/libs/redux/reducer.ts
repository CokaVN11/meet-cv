import { combineReducers } from "@reduxjs/toolkit";
import { AuthReducer } from "./sliceAuth";
import { CompanyReducer } from "./sliceCompany";

export const rootReducer = combineReducers({
  auth: AuthReducer,
  company: CompanyReducer,
});