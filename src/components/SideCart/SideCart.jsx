import React from "react";

const SideCart = ({ cart }) => {
  console.log(cart);
  return (
    <div>
      <img src={cart.strMealThumb} alt="" />
      <h1 className="text-6xl text-stone-600">{cart.strMeal}</h1>
      <hr className="my-4"/>
      <p className="text-white">{cart.strInstructions}</p>
    </div>
  );
};

export default SideCart;
