import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [recepie, setRecepie] = useState({})

  const getRecepie = function () {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(res => res.json())
      .then(res => {
        console.log(res.meals[0])
        setRecepie(res.meals[0])
      })
  }

  const ingredientsList = function () {
    var ingredients = []
    for (var i = 1; i < 20; i++) {
      console.log(recepie[`strIngredient${i}`])
      if (recepie[`strIngredient${i}`]) {

        ingredients.push(recepie[`strIngredient${i}`] + " : " + recepie[`strMeasure${i}`])
      } else {
        break
      }
    }

    return ingredients.map((item, index) => <li key={index}>{item}</li>)
  }

  return (
    <div className="container">
      <div style={{ textAlign: "center" }}><h3>Feeling hungry?</h3>
        <h6>Get a random Recepie for today</h6>
        <button onClick={getRecepie}>Get Recepie</button></div><br />

      {recepie && recepie.idMeal ?
        <>
          <div className="flex-grid" id={recepie.idMeal}>
            <div className="col sidebar" >

              <img src={recepie.strMealThumb} width="250px" alt="recepie image" />
              <strong>Category: </strong><span>{recepie.strCategory}</span><br />
              <strong>Area: </strong><span>{recepie.strArea}</span><br />
              <strong>Tags: </strong><span>{recepie.strTags ? recepie.strTags.split(",").join(", ") : null}</span><br />
              <h5>
                Ingredients:
            </h5>
              <ul>
                {ingredientsList()}
              </ul>
            </div>
            <div className="col main">
              <h2>{recepie.strMeal}</h2>

              <p>{recepie.strInstructions.split(". ").map((item, index) => {
                return (
                  <li key={index} style={{ padding: 10 }} >{item}</li>
                )
              })}</p>
            </div>

          </div>
          <h3> Recepie Video </h3>
          <iframe width="960px" height="600px" src="https://www.youtube.com/embed/${recepie.strYoutube.slice(-11)}" >

          </iframe>
        </> : null
      }
    </div >
  );
}

export default App;
