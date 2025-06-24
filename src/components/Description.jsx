import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Description() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/recipes/${id}`)
      .then((res) => setRecipe(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!recipe) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Link to="/" className="text-blue-500 underline mb-4 block">← Back to Recipes</Link>
      <img src={recipe.image} alt={recipe.name} className="w-full rounded-xl mb-4" />
      <h1 className="text-3xl font-bold mb-2">{recipe.name}</h1>
      <p className="mb-4 text-gray-700 whitespace-pre-line"><strong>Instructions:</strong>{recipe.instructions}</p>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="text-gray-600 space-y-1">
        <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} minutes</p>
        <p><strong>Servings:</strong> {recipe.servings}</p>
        <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
      </div>
    </div>
  );
}

export default Description;
