import { client } from "@/utils/client";
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
    isLoading: false,
    category: []
}

// Actual Slice
export const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        // Action to set the authentication status
        setLoading(state, action) {
            state.isLoading = action.payload;
        },
        setCategory(state, action) {
            state.category = action.payload;
        }
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.admin,
            };
        },
    },
});

export const { setLoading, setCategory } = adminSlice.actions;

export const fetchCategories = () => async dispatch => {
    const result = await client.get("/api/category");
    dispatch(setCategory(result?.data || []))
}

export const updateCategories = (data) => async dispatch => {
    dispatch(setLoading(true));
    await client.patch("/api/category", data);
    await dispatch(fetchCategories());
    dispatch(setLoading(false));
}

export default adminSlice.reducer;