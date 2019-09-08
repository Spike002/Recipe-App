let recipes = getSavedRecipe()
const recipeId = location.hash.substring(1)

let recipe = recipes.find(function(recipe){
  return recipe.id === recipeId
})

// if no recipe found redirect to index page
if (!recipe) {
  location.assign('/index.html')
}

// Remove Ingredients
const removeIngredient = function (id){
  const ingredientIndex = recipe.ingredients.findIndex( function (ingredient){
    return ingredient.id === id
  })

  if (ingredientIndex > -1){
    recipe.ingredients.splice(ingredientIndex, 1)
  }
}

// Get the DOM Ingredients elements
const generateIngredientsDOM = function (ingredient){
  const ingredientEl = document.createElement('div')
  const ingredientDiv = document.createElement('div')
  const checkbox = document.createElement('input')
  const ingredientText = document.createElement('span')
  const removeButton = document.createElement('button')

  // Setup ingredient checkbox
  checkbox.setAttribute('type', 'checkbox')
  checkbox.checked = ingredient.completed
  checkbox.classList.add('input-Checkbox')
  ingredientDiv.appendChild(checkbox)

  checkbox.addEventListener('change', function (){
    toggleIngredient(ingredient.id)
    saveRecipe(recipes)
    renderIngredient(recipe.ingredients)

  })

  // Setup the ingredient text
  ingredientText.textContent = ingredient.text
  ingredientDiv.classList.add('ingredient')
  ingredientDiv.appendChild(ingredientText)
  ingredientEl.appendChild(ingredientDiv)

  // Setup the remove button
  removeButton.textContent = 'remove'
  removeButton.classList.add('btn-remove-ingredient')
  ingredientEl.appendChild(removeButton)
  ingredientEl.classList.add('list-ingredient')

  removeButton.addEventListener('click', function (){
    removeIngredient(ingredient.id)
    saveRecipe(recipes)
    renderIngredient(recipe.ingredients)
  })
  return ingredientEl
}

// Render Ingredients DOM
const renderIngredient = function(ingredient){
  renderIngredients.innerHTML = " ";

  ingredient.forEach(function (ingredient){
    renderIngredients.appendChild(generateIngredientsDOM(ingredient))
  })
}

// Toggle the completed value for a given ingredient
const toggleIngredient = function (id) {

  const ingredient = recipe.ingredients.find (function (ingredient){
    return ingredient.id === id
  })

  if(ingredient !== undefined){
    ingredient.completed = !ingredient.completed
  }

  completedIngredients();
}

//Message completed all Ingredients
const completedIngredients = function (){
  let count = 0;
  let message = '';
  recipe.ingredients.forEach(function(element){
    if (element.completed){
      count++;
    }
  })

  if( count == 0){
    message = `You have none of the ingredients`;
  }
  else if( count < recipe.ingredients.length){
    message =`You have some of ingredients`;
  } else if (count= recipe.ingredients.length){
    message = `You have all of ingredients`;
  }
  recipe.message = message;
  saveRecipe(recipes)
}

// Remove Recipe
const removeRecipe = function (id){
  const recipeIndex = recipes.findIndex(function (recipe){
    return recipe.id === id
  })

  if (recipeIndex > -1){
    recipes.splice(recipeIndex, 1)
  }
}
