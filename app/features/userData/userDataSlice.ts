import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserDataState {
  name: string;
  phoneNumber: string;
}

const initialState: UserDataState = {
  name: "",
  phoneNumber: "",
};

const userDataSlice = createSlice({
  name: "user", // Updated slice name
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserDataState>) => {
      state.name = action.payload.name; // Set the name
      state.phoneNumber = action.payload.phoneNumber; // Set the phone number
    },
  },
});

export const { setUserData } = userDataSlice.actions;

export default userDataSlice.reducer;
