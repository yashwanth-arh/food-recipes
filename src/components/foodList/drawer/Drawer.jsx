import React from "react";
import { Drawer, ButtonToolbar, IconButton } from "rsuite";
import AngleDownIcon from "@rsuite/icons/legacy/AngleDown";
import "./Drawer.scss";
import dummyCat from "./catJsonData.json";
import { useDispatch } from "react-redux";
import { getFoodRecipe } from "../../../store/foodRecipe/foodData/FoodRecipeSlice";
export default function DrawerApp() {
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleOpen = (key) => {
    setOpen(true);
    setPlacement(key);
  };
  const dispatch = useDispatch();
  const handleCategory = (e) => {
    // console.log(e);
    const arg = {
      cat: e.target.innerHTML,
      from: 1,
      to: 20,
    };
    dispatch(getFoodRecipe(arg));
    setOpen(false);
  };
  return (
    <>
      <hr />
      <ButtonToolbar>
        <IconButton
          icon={<AngleDownIcon />}
          component="span"
          onClick={() => handleOpen("top")}
        >
          Recipes
        </IconButton>
      </ButtonToolbar>

      <Drawer
        size="sm"
        placement={placement}
        open={open}
        onClose={() => setOpen(false)}
      >
        <Drawer.Header style={{ backgroundColor: "lightcoral" }}>
          <Drawer.Title style={{ Color: "#fff" }}>Choose Recipes</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body style={{ backgroundColor: "honeydew" }}>
          <div className="recipe-header">
            <h4>RECIPE BY REGION</h4>
            <h4>RECIPE BY DISH</h4>
          </div>
          <div className="drawer-list">
            <div className="recipe-region">
              {dummyCat[0].catNameByRegion.map((element, index) => {
                // console.log(element);
                return (
                  <span key={index} onClick={handleCategory}>
                    {element}
                  </span>
                );
              })}
            </div>
            <div className="recipe-region">
              {dummyCat[0].catNameByDish.map((element, index) => {
                // console.log(element);
                return (
                  <span key={index} onClick={handleCategory}>
                    {element}
                  </span>
                );
              })}
            </div>
          </div>
        </Drawer.Body>
      </Drawer>
    </>
  );
}
