import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping} from "@fortawesome/free-solid-svg-icons";


const Card = (props) => {
  const { strMeal, strInstructions, strMealThumb } = props.meal;
  const handleAddToCart = props.handleAddToCart;
  return (
    <div className="grid md:grid-cols-2">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={strMealThumb} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{strMeal}</h2>
          <div className="card-actions">
            <button
              onClick={() => handleAddToCart(props.meal)}
              className="btn btn-primary"
            >
              Show Details <FontAwesomeIcon icon={faCartShopping} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
