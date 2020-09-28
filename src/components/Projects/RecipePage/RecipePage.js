import React from "react";
import "./RecipePage.scss";

import spinachSalad from "../../../assets/images/spinach-salad.jpg";
import croutonSalad from "../../../assets/images/crouton-salad.jpg";
import pancakes from "../../../assets/images/pancakes.jpg";
import pizza from "../../../assets/images/pizza.jpg";
import donuts from "../../../assets/images/donuts.jpg";
import ramen from "../../../assets/images/ramen.jpg";

import RecipePageContainer from "./RecipePageContainer/RecipePageContainer";
import RecipeDifficulty from "./RecipeDifficulty/RecipeDifficulty";
import RecipeSearch from "./RecipeSearch/RecipeSearch";
import RecipeInfo from "./RecipeInfo/RecipeInfo";
import RecipeSummary from "./RecipeSummary/RecipeSummary";
import RecipeSubscribe from "./RecipeSubscribe/RecipeSubscribe";
import RecipeCarousel from "./RecipeCarousel/RecipeCarousel";

export default function RecipePage() {
  const mockRecipe = {
    id: 1,
    name: "Spinach Salad",
    description:
      "Simple recipe for a weeknight or a celebation table. I promise it is one of the easiest salads you will ever make!",
    rating: 4,
    reviewCount: 14000,
    photo: spinachSalad,
  };

  const mockCarouselItems = [
    {
      id: 1,
      name: "Crispy Crouton Salad",
      photo: croutonSalad,
    },
    {
      id: 2,
      name: "Pancakes with yogurt",
      photo: pancakes,
    },
    {
      id: 3,
      name: "Neapolitan Pizza",
      photo: pizza,
    },
    {
      id: 4,
      name: "Crispy and Creamy Doughnuts",
      photo: donuts,
    },
    {
      id: 5,
      name: "Spinach Salad",
      photo: spinachSalad,
    },
    {
      id: 6,
      name: "Ramen",
      photo: ramen,
    },
  ];

  return (
    <div className="recipe-page">
      <RecipePageContainer>
        <RecipeCarousel items={mockCarouselItems} />
      </RecipePageContainer>
      <RecipePageContainer>
        <RecipeSummary recipe={mockRecipe} />
      </RecipePageContainer>
      <RecipePageContainer>
        <RecipeSubscribe />
      </RecipePageContainer>
      <RecipePageContainer red={true}>
        <RecipeSearch />
      </RecipePageContainer>
      <RecipePageContainer>
        <RecipeInfo />
      </RecipePageContainer>
      <RecipePageContainer>
        <RecipeDifficulty />
      </RecipePageContainer>
    </div>
  );
}
