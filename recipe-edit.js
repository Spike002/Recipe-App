const titleElement = document.querySelector('#recipe-title')
const instructionElement = document.querySelector('#recipe-instruction')
const addIngredients = document.querySelector('#add-ingredient-form')
const renderIngredients = document.querySelector('#ingredient');

const recipeId = location.hash.substring(1)
let recipes = getSavedRecipe()

let recipe = recipes.find(function(recipe){
  return recipe.id === recipeId
})

// if no recipe found redirect to index page
if (!recipe) {
  location.assign('/index.html')
}

titleElement.value = recipe.title;
instructionElement.value = recipe.instruction;

// Toggle the completed value for a given todo
const toggleIngredient = function (id) {
  const ingredient = recipe.ingredients.find (function (ingredient){
    return ingredient.id === id
  })

  if(ingredient !== undefined){
    ingredient.completed = !ingredient.completed
  }
}

titleElement.addEventListener('input', function (e){
  recipe.title = e.target.value;
  saveRecipe(recipes)
})

instructionElement.addEventListener('input', function (e){
  recipe.instruction = e.target.value;
  saveRecipe(recipes)
})

addIngredients.addEventListener('submit', function (e){
  e.preventDefault()
  const id = uuidv4();

  recipe.ingredients.push({
    id: id,
    text: e.target.elements.addIngredients.value,
    completed: false
  })
  saveRecipe(recipes)
  renderIngredient(recipe.ingredients)
})

const renderIngredient = function(ingredient){
  renderIngredients.innerHTML = " ";
  ingredient.forEach(function (ingredient){
    // const ingredientText = document.createElement('span')
    // console.log(ingredient.text);
    renderIngredients.appendChild(generateIngredientsDOM(ingredient))
  })
}

renderIngredient(recipe.ingredients)
