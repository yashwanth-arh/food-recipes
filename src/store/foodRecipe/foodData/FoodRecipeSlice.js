import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const API_KEY = "73c3e063ca6383f7ad2a4490ec270d12";
const APP_ID = "e7fe5f90";

const initialState = {
  data: [],
  isSuccess: false,
  message: "",
  loading: true,
  to: 10,
  from: 1,
  count: "",
};

const FoodRecipeSlice = createSlice({
  name: "FoodRecipeSlice",
  initialState,
  reducers: {
    removeMovieOrShowDetail: (state) => {
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFoodRecipe.fulfilled, (state, action) => {
      state.data = action.payload?.hits;
      state.to = action.payload?.to;
      state.from = action.payload?.from;
      state.count = action.payload?.count;
      state.loading = false;
    });
  },
});

export const getFoodRecipe = createAsyncThunk(
  "food/getFoodRecipe",
  async (arg) => {
    // console.log(arg);
    try {
      const { data } = await axios.get(
        `https://api.edamam.com/search?q=${arg.cat}&app_id=${APP_ID}&app_key=${API_KEY}&from=${arg.from}&to=${arg.to}`
      );
      // this.data.push(data.hits);
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
    // https://api.edamam.com/search?q=chicken&app_id=&app_key=73c3e063ca6383f7ad2a4490ec270d12
    // console.log(arg);
  }
);

export default FoodRecipeSlice;
