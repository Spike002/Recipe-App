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
  const messageEl = document.createElement('h6')

  if(recipe.title === ''){
    titleEl.textContent = `Unname Recipe`
  }else{
      titleEl.textContent = `${recipe.title}`
  }

  messageEl.textContent = `${recipe.message}`

  linkEl.appendChild(recipeEl)
  linkEl.appendChild(titleEl)
  linkEl.appendChild(messageEl)


  recipeEl.addEventListener('click', function (){
      location.assign('/edit.html')
  })
  linkEl.setAttribute('href', `/edit.html#${recipe.id}`)

  return linkEl
}
