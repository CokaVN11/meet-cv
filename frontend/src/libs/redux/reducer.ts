import { combineReducers } from "@reduxjs/toolkit";
import { AuthReducer } from "./sliceAuth";
import { CompanyReducer } from "./sliceCompany";
import { CandidateReducer } from "./sliceCandidate";

export const rootReducer = combineReducers({
  auth: AuthReducer,
  company: CompanyReducer,
  candidate: CandidateReducer,
});