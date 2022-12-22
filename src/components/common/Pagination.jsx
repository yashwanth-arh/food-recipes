import React from "react";
import { useDispatch } from "react-redux";
import { Pagination } from "rsuite";
import { getFoodRecipe } from "../../store/foodRecipe/foodData/FoodRecipeSlice";

export default function PaginationComponent(props) {
  const dispatch = useDispatch();
  //   const [activePage, setActivePage] = React.useState(1);
  const handlePagination = (e) => {
    // console.log(e * 10);
    const arg = {
      cat: "chicken",
      from: e,
      to: e * 20,
    };
    dispatch(getFoodRecipe(arg));
    // setActivePage(props.from);
  };
  return (
    <>
      <Pagination
        prev
        last
        next
        first
        size="sm"
        total={100}
        limit={10}
        activePage={props.from}
        onChangePage={handlePagination}
      />
      {/* <Pagination
        total={100}
        limit={10}
        activePage={activePage}
        onChangePage={handlePagination}
      /> */}
    </>
  );
}
