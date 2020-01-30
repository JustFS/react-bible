import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';
import './recipe.css'


const Recipe = () => {
  const APP_ID = '2083ae21';
  const APP_KEY = '17fa79150c7f9a3045824e2e3f8a22b0';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
   
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);

    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    // REMETTRE INPUT A ZERO
    setSearch('');
  }

  return (
    <div className="App">
      <form 
        className="search-form"
        onSubmit={getSearch}
      >
        <input 
          className="search-bar" 
          type="text" 
          value={search} 
          onChange={updateSearch}/>
        <button 
          className="search-button" 
          type="submit"
        >
          Search
        </button>  
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <RecipeCard 
            key={recipe.recipe.label}
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories} 
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  )
}

export default Recipe;
