import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CandidatePageTitle, PageTitle } from "types/index";
import { merge } from "lodash";



type CandidateState = {
  currentPage?: CandidatePageTitle;
};

const CandidateSlice = createSlice({
  name: 'company',
  initialState: {
    currentPage: PageTitle.candidate.jobs,
  } as CandidateState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<CandidatePageTitle>) => {
      merge(state, { currentPage: action.payload })
    },
  },
});

export const { setCurrentPage } = CandidateSlice.actions;
export const CandidateReducer = CandidateSlice.reducer;