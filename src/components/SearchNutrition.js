import React, { useState } from "react";

const SearchNutrition = () => {
  const [nutrition, setNutrition] = useState([]);
  const [query, setQuery] = useState("");

  const search = async (event) => {
    if (event.key === "Enter") {
      try {
        let res = await fetch(
          `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer?q=${query}`,
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
        setNutrition(data);
        setQuery("");
        console.log(data);
      } catch (err) {
        console.error(err.message);
      }
    }
  };

  return (
    <div className="search-nutrition">
      <h1>Ask Me!</h1>
      <h4>
        Example: Calories in an apple? or Iron in a banana? or Calories in 100
        servings of beer?
      </h4>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter question.."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
      </div>
      <div className="output">
        <h2>{nutrition.answer}</h2>
        <img src={nutrition.image} alt="" />
      </div>
    </div>
  );
};

export default SearchNutrition;
