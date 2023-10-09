import React, { useState, useEffect } from "react";

// Recipe list
const recipes = [
  {
    name: "Pancakes",
    ingredients: ["flour", "milk", "eggs"],
  },
  {
    name: "Omelette",
    ingredients: ["eggs", "cheese", "onion"],
  },
  {
    name: "Smoothie",
    ingredients: ["bananas", "strawberries", "yogurt"],
  },
];

const RecipeList = () => {
  return (
    <>
      <h1>Recipes</h1>
      {recipes.map((e) => (
        <>
          <h4>name:{e.name} </h4>
          <p>
            ingredients:
            {e.ingredients.map((ing) => (
              <>
                <li>{ing}</li>
              </>
            ))}
          </p>
        </>
      ))}
    </>
  );
};

export default RecipeList;
