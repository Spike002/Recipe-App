const titleElement = document.querySelector('#recipe-title')
const instructionElement = document.querySelector('#recipe-instruction')
const addIngredients = document.querySelector('#add-ingredient-form')
const renderIngredients = document.querySelector('#ingredient');
const removeRecipeBtn = document.querySelector('#remove-Recipe');

titleElement.value = recipe.title;
instructionElement.value = recipe.instruction;


titleElement.addEventListener('input', function (e){
  if(e.target.value == null){
    recipe.title = `Unname Recipe`
  }else {
    recipe.title = e.target.value;
  }

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
  completedIngredients();
})

removeRecipeBtn.addEventListener('click', function(){
  removeRecipe(recipe.id);
  saveRecipe(recipes)
  location.assign('/index.html')

})

renderIngredient(recipe.ingredients)
completedIngredients(recipe.ingredients);
