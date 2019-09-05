let recipes = getSavedRecipe()
saveRecipe(recipes)
const filters = {
  searchText: ''
}

// render recipes
const renderRecipes = function(recipes, filters){
  const filtersRecipes = recipes.filter(function (recipe){
    return recipe.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  document.querySelector('#recipes').innerHTML =  " ";
    filtersRecipes.forEach(function (recipe) {
      const recipeEl = generateRecipeDom(recipe);
      document.querySelector('#recipes').appendChild(recipeEl)
    })
}

renderRecipes(recipes, filters)
// Search recipe from input
document.querySelector('#search-recipe').addEventListener('input', function (e){
  filters.searchText = e.target.value;
  renderRecipes(recipes, filters)
})

// Set up add recipe button
document.querySelector('#btn-create-recipe').addEventListener('click', function (e){
  const id = uuidv4();
  recipes.push({
    id: id,
    title: '',
    message: '',
    instruction: '',
    ingredients: []
  })
  //renderRecipes(recipes, filters)
  saveRecipe(recipes)
  location.assign(`/edit.html#${id}`)
})


// Set up submit recipe button
// document.querySelector('#submit-recipe').addEventListener('submit', function(e){
//   e.preventDefault()
//   const id = uuidv4();
//   recipes.push({
//     id: id,
//     title: e.target.elements.titleRecipe.value,
//     message: 'Click Here to add ingredients',
//     instruction: '',
//     ingredients: [{
//
//     }]
//   })
//
//   document.querySelector('#submit-recipe').style.display = "none";
//   renderRecipes(recipes, filters)
//   console.log(recipes);
// })
