import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Cards() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true); // loading state

  useEffect(() => {
    axios
      .get("https://dummyjson.com/recipes?limit=9") // ✅ Load only 9 for speed
      .then((res) => {
        setRecipes(res.data.recipes);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
    <div className="m-6">
      <div>
      <h1
        className="text-5xl text-center"
      >
        Recipes
      </h1>
      </div>
      {loading ? (
        <p className="text-center text-gray-500 text-lg">Loading recipes...</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {recipes.map((meal) => (
            <Link
              to={`/recipe/${meal.id}`}
              key={meal.id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition"
            >
              <img
                src={meal.image}
                alt={meal.name}
                loading="lazy"
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold">{meal.name}</h2>
                <p className="text-sm text-gray-500">
                  PrepTime: {meal.prepTimeMinutes} min | Servings:{" "}
                  {meal.servings}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
    </>
  );
}

export default Cards;
