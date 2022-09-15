import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchParas = createAsyncThunk("para/getParas", async (data) => {
  const paraCount = data.paras;
  const paraFormat = data.option;

  const res = await axios(
    `https://baconipsum.com/api/?type=all-meat&paras=${paraCount}&format=${paraFormat}`
  );

  return res.data;
});

export const textSlice = createSlice({
  name: "texts",
  initialState: {
    text: "",
  },
  reducers: {},
  extraReducers: {
    [fetchParas.pending]: (state, action) => {},
    [fetchParas.fulfilled]: (state, action) => {
      state.text = action.payload;
    },
    [fetchParas.rejected]: (state, action) => {},
  },
});

export default textSlice.reducer;
