import React from "react";

const Card = (props) => {
  console.log(props.meal);
    const { id, strMeal, strInstructions, strMealThumb } = props.meal;
   
  return (
    <div className="grid md:grid-cols-2">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={strMealThumb} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{strMeal}</h2>
          <div className="card-actions">
            <button className="btn btn-primary">Show Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;