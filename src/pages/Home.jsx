import React from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import FoodList from "../components/foodList/FoodList";

export default function Home() {
  return (
    <div>
      <Header />
      <FoodList />
      <Footer />
    </div>
  );
}
