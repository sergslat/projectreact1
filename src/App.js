import React, {useEffect,useState} from 'react';
import Recipe from './Recipe'




function App(){

  const APP_ID = '273280e1';
  const APP_KEY='bae976ffb4f4ad721d934d977dc4b408'
  
  const[recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState  ('');
  const [query,setQuery] = useState ('chicken') //default  = chicken

  useEffect( async() =>{

   getRecipes(); 

  },[query]); //executed at beggining and everytime 'query' is updated


  const getRecipes = async () => {

    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
    console.log(recipes)
  }

  const updateSearch = e =>{

    setSearch (e.target.value);
    
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch(''); 
  }

  return(

    <div className='App'>
      

      <form onSubmit= {getSearch} className = 'search-form' >
        <input className='search-bar' type="text" value ={search} onChange={updateSearch}/>
        <button
          
          className='search-button' type='submit'>Search
        </button>
      </form>

      <div className='recipes'>
        {recipes.map(recipe =>( //not {} but () because we return a html}

          <Recipe
          key={recipe.recipe.label}
          label = {recipe.recipe.label}
          calories = {recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          />

        ))}
      </div>

      
    
            
    </div>
  );
}

export default App;
