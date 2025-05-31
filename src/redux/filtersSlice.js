import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        name: ""
    },
    reducers: {
        changeFilter: (store, action) => {
            store.name = action.payload
        }
    }
})

export const selectFiltersName = (state) => state.filters.name
export const filtersReducer = filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;