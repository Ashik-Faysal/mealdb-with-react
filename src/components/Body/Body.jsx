import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import SideCart from "../SideCart/SideCart";

const Body = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);
  return (
    <div className="flex justify-between">
      <div className="w-[70%] bg-slate-600 grid grid-cols-3 gap-2">
        {meals.map((meal) => (
          <Card meal={meal} key={meal.idMeal} />
        ))}
      </div>
      <div className="bg-neutral-400 text-center w-[25%]">
        <SideCart />
      </div>
    </div>
  );
};

export default Body;
