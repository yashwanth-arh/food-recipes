import { configureStore } from "@reduxjs/toolkit";
import FoodRecipeSlice from "./foodRecipe/foodData/FoodRecipeSlice";

const store = configureStore({
  reducer: {
    foodSlice: FoodRecipeSlice.reducer,
  },
});

export default store;
