import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CompanyPageTitle, PageTitle } from "types/index";
import { merge } from "lodash";



type CompanyState = {
  currentPage?: CompanyPageTitle;
};

const CompanySlice = createSlice({
  name: 'company',
  initialState: {
    currentPage: PageTitle.company.home,
  } as CompanyState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<CompanyPageTitle>) => {
      merge(state, { currentPage: action.payload })
    },
  },
});

export const { setCurrentPage } = CompanySlice.actions;
export const CompanyReducer = CompanySlice.reducer;