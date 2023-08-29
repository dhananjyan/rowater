import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "./reducer";

// initial states here
const preloadedState = {};

// middleware
const middleware = [thunk];

const makeStore = () =>
    configureStore({
        reducer: rootReducer,
        preloadedState,
        middleware
    });

export const wrapper = createWrapper(makeStore, { debug: false });