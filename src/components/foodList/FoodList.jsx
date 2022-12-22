import React from "react";
import FoodCard from "../foodCard/FoodCard";
import "./FoodList.scss";
import { useDispatch, useSelector } from "react-redux";
import { getFoodRecipe } from "../../store/foodRecipe/foodData/FoodRecipeSlice";
import { useEffect } from "react";
import Pagination from "../common/Pagination";
import { Loader } from "rsuite";

export default function FoodList() {
  const dispatch = useDispatch();
  useEffect(() => {
    const arg = {
      cat: "chicken",
      from: 1,
      to: 20,
    };
    dispatch(getFoodRecipe(arg));
  }, [dispatch]);
  const foodRecipe = useSelector((state) => state.foodSlice);
  // const recipeData = foodRecipe?.data.hits;
  // console.log(foodRecipe);
  return (
    <div className="food-list">
      <div className="food-cards">
        {foodRecipe.data.length <= 0 ? (
          <Loader backdrop content="loading..." vertical />
        ) : (
          ""
        )}

        {foodRecipe.data.map((item, index) => {
          // console.log(index);
          return (
            <FoodCard key={index.toString()} data={item.recipe}></FoodCard>
          );
        })}
        {/* {foodRecipe.forEach((element) => {
          <FoodCard data={element} />;
        })} */}
      </div>
      <Pagination
        to={foodRecipe.to}
        from={foodRecipe.from}
        count={foodRecipe.count}
      />
    </div>
  );
}
