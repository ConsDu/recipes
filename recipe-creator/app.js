// import { v4 as uuidv4 } from 'uuid';

const recipes = JSON.parse(localStorage.getItem('recipes')) ?? [];
console.log('hey');
const form = document.querySelector('#recipe-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const name = document.querySelector('#name');
  const ingredients = document.querySelector('#ingredients');
  const instructions = document.querySelector('#instructions');
  const time = document.querySelector('#time');
  const cooked = document.querySelector('#cooked');
  const people = document.querySelector('#people');
  const category = document.querySelector('#category');
  const numberOnBook = document.querySelector('#number');

  const cleanIngredients = ingredients => {
    const firstArray = ingredients.split(',');
    const secondArray = firstArray.map(item => {
      const splitted = item.split('=');
      return { name: splitted[0].trim(), quantity: splitted[1]?.trim() ?? ''.trim() };
    });

    return secondArray;
  };

  const cleanInstructions = instructions => {
    const separatedInstructions = instructions.split('+');
    return separatedInstructions.map(item => item.trim());
  };

  const recipe = {};

  recipe.id = uuid.v4();
  recipe.name = name.value;
  recipe.instructions = cleanInstructions(instructions.value.trim());
  recipe.ingredients = cleanIngredients(ingredients.value.trim());
  recipe.time = Number(time.value);
  recipe.cooked = cooked.value.trim().toLowerCase();
  recipe.people = Number(people.value);
  recipe.category = category.value.trim().toLowerCase();
  recipe.favorite = false;
  recipe.image = `src/db/images/${Number(numberOnBook.value)}.jpeg`;
  recipe.numberOnBook = Number(numberOnBook.value);

  recipes.push(recipe);
  console.log(recipes);

  localStorage.setItem('recipes', JSON.stringify(recipes));

  snackbar.show('Recipe added!');

  name.value = '';
  ingredients.value = '';
  instructions.value = '';
  time.value = '';
  cooked.value = 'sin cocción';
  people.value = '';
  category.value = '';
  numberOnBook.value = '';
});
