import React, { useState } from "react";

const Recipes = () => {
  const [recipe, setRecipe] = useState([]);
  const [calories, setCalories] = useState("");

  const search = async (event) => {
    if (event.key === "Enter") {
      try {
        let res = await fetch(
          `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?targetCalories=${calories}&timeFrame=day`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-host":
                "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
              "x-rapidapi-key":
                "03a03bbec7msh09a5ae7cba5c2dfp1dd869jsn5d2a2397efd0",
            },
          }
        );
        let data = await res.json();
        setRecipe([data]);
        setCalories("");
        console.log(data);
      } catch (err) {
        console.error(err.message);
      }
    }
  };

  return (
    <div className="recipes">
      <div className="search-recipe-bar">
        <p>
          Enter your desired calories intake below and press enter for cooking
          ideas!
        </p>
        <small>Min. ~300 calories & Max. ~3500 calories</small>
        <input
          type="text"
          placeholder="# of calories.."
          onChange={(e) => setCalories(e.target.value)}
          value={calories}
          onKeyPress={search}
        />
      </div>

      {recipe.map((item, key) => (
        <div className="output-recipe" key={key}>
          <div className="box">
            <ul>
              <li>Calories: {item.nutrients.calories}</li>
              <li>Carbohydrates: {item.nutrients.carbohydrates}</li>
              <li>Fat: {item.nutrients.fat}</li>
              <li>Protein: {item.nutrients.protein}</li>
            </ul>
            <h1>Breakfast</h1>
            <h2>{item.meals[0].title}</h2>
            <h3>Ready in {item.meals[0].readyInMinutes} minutes.</h3>
            <h3>Number of servings: {item.meals[0].servings}</h3>
            <p>
              Click for Recipe:{" "}
              <a href={item.meals[0].sourceUrl}>{item.meals[0].sourceUrl}</a>{" "}
            </p>
          </div>
          <div className="box">
            <h1>Lunch</h1>
            <h2>{item.meals[1].title}</h2>
            <h3>Ready in {item.meals[1].readyInMinutes} minutes.</h3>
            <h3>Number of servings: {item.meals[1].servings}</h3>
            <p>
              Recipe:{" "}
              <a href={item.meals[1].sourceUrl}>{item.meals[1].sourceUrl}</a>{" "}
            </p>
          </div>
          <div className="box">
            <h1>Dinner</h1>
            <h2>{item.meals[2].title}</h2>
            <h3>Ready in {item.meals[2].readyInMinutes} minutes.</h3>
            <h3>Number of servings: {item.meals[2].servings}</h3>
            <p>
              Recipe:{" "}
              <a href={item.meals[2].sourceUrl}>{item.meals[2].sourceUrl}</a>{" "}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
