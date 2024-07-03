// store.ts
import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./features/userData/userDataSlice"; // Adjust the path as needed

export const store = configureStore({
  reducer: {
    userData: userDataReducer, // Add the user slice
    // ... other reducers if you have them
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
