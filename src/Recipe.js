import React from 'react';
import './App.css'

const Recipe = ({label,calories,image,ingredients}) =>{

    return (
        <div>
            <h1>{label}</h1>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories} calories </p>
            <img src={image} alt=""/>
        </div>
    )

}

export default Recipe;