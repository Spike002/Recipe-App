// Read existing Recipes from localStorage
const getSavedRecipe = function () {
    const RecipesJSON = localStorage.getItem('recipes')

    if(RecipesJSON !== null){
      return JSON.parse(RecipesJSON)
    }else{
      return data
    }
}

const saveRecipe =  function (recipes){
  localStorage.setItem('recipes', JSON.stringify(recipes))
}

//Generate Recipe DOM
const generateRecipeDom = function (recipe){
  const linkEl = document.createElement('a')
  const recipeEl = document.createElement('div')
  const titleEl = document.createElement('h4')
  const instructionEl = document.createElement('h6')

  titleEl.textContent = `${recipe.title}`
  instructionEl.textContent = `${recipe.message}`

  linkEl.appendChild(recipeEl)
  linkEl.appendChild(titleEl)
  linkEl.appendChild(instructionEl)


  recipeEl.addEventListener('click', function (){
      location.assign('/edit.html')
  })
  linkEl.setAttribute('href', `/edit.html#${recipe.id}`)

  return linkEl
}


// Get the DOM Ingredients elements
const generateIngredientsDOM = function (ingredient){
  const ingredientEl = document.createElement('div')
  const checkbox = document.createElement('input')
  const ingredientText = document.createElement('span')
  const removeButton = document.createElement('button')

  // Setup ingredient checkbox
  checkbox.setAttribute('type', 'checkbox')
  checkbox.checked = ingredient.completed
  ingredientEl.appendChild(checkbox)

  checkbox.addEventListener('change', function (){
    toggleIngredient(ingredient.id)
    saveRecipe(recipes)
    renderIngredient(recipe.ingredients)

  })

  // Setup the todo text
  ingredientText.textContent = ingredient.text
  ingredientEl.appendChild(ingredientText)

  // Setup the remove button
  removeButton.textContent = 'x'
  ingredientEl.appendChild(removeButton)
  // removeButton.addEventListener('click', function (){
  //   removeTodo(todo.id)
  //   savedTodos(todos)
  //   renderTodos(todos, filters)
  // })
  return ingredientEl
}
