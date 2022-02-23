let base;
let ingredients = []
let sauces = []
let order = document.getElementById("order");

function calculationMarkup(originalCost){
    if (originalCost < 10){
        return originalCost * 0.2 + originalCost
    }
    else if (originalCost > 10 && originalCost < 15){
        return originalCost * 0.15 + originalCost
    }
    else{
        return originalCost * 0.1 + originalCost
    }
}

function calcCostCaloriePizza(){
    const costBase = base?.['cost']
    const costProducts = ingredients?.reduce((sum, current) => sum + current['cost'], 0)
    const costSauces = sauces?.reduce((sum, current) => sum + current['cost'], 0)
    const caloriesBase = base?.['calories']
    const caloriesProducts = ingredients?.reduce((sum, current) => sum + current['calories'], 0)
    const caloriesSauces = sauces?.reduce((sum, current) => sum + current['calories'], 0)

    const totalCost = (costBase === undefined ? 0 : costBase) +
        (costProducts === undefined? 0 : costProducts) +
        (costSauces === undefined? 0: costSauces)
    console.log(totalCost)
    document.getElementById('totalCost').innerHTML = calculationMarkup(totalCost) + ' BYN'

    const totalCalories = (caloriesBase === undefined ? 0 : caloriesBase) +
    (caloriesProducts === undefined? 0 : caloriesProducts) +
    (caloriesSauces === undefined? 0 : caloriesSauces)
    document.getElementById('totalCalories').innerHTML = totalCalories + ' ккал';

}

/**
 *
 * @param name {String}
 * @returns {*}
 */
 function checkItem(array, name){
    return array.find(item => item.name === name)
}

function AddBase(){
    const selectedBase = document.querySelector('input[id="base"]:checked').value;
    if(selectedBase)
    {
        base = new Base(BasesPizza[selectedBase])
        calcCostCaloriePizza()
        document.getElementById('pizzaBase').innerHTML = base.name;
        order.style.display = "block";
        
    }
}

//
function AddIngredient(){
    let selectedProduct = document.getElementById('ingredient').value;
    if (checkItem(ingredients, selectedProduct) === undefined)
    {
        ingredients.push(new Product(ProductsPizza[selectedProduct]))
        calcCostCaloriePizza()
        document.getElementById('pizzaIngridient').innerHTML += selectedProduct + '&nbsp;';
    }
    else
    {
        alert('Данный продукт уже добавлен.')
    }

}
//
function DeleteIngredient()
{
    let selectedIngredient = document.getElementById('ingredient').value
    if (checkItem(ingredients, selectedIngredient) !== undefined){
        let findIndex = undefined
        ingredients.forEach((item, index) => {
            if (item.name === selectedIngredient){
                findIndex = index
            }
        })
        ingredients.splice(findIndex, 1)
        calcCostCaloriePizza()
        str = document.getElementById('pizzaIngridient').innerHTML
        document.getElementById('pizzaIngridient').innerHTML = str.replace(selectedIngredient,'');
    }
        else{
            alert('Данный ингредиент не был добавлен')
        }
}

//
function AddSauce(){
    let selectedSauce = document.getElementById('sauce').value;
    
        if (checkItem(sauces, selectedSauce) === undefined)
        {
            sauces.push(new Sauce(SausesPizza[selectedSauce]))
            calcCostCaloriePizza()
            document.getElementById('pizzaSauce').innerHTML += selectedSauce + '&nbsp;';
        }
        else
        {
            alert('Данный соус уже добавлен.')
        }
}
//
function DeleteSauce(){
    let selectedSauce = document.getElementById('sauce').value
    if (checkItem(sauces, selectedSauce) !== undefined){
        let findIndex = undefined
        sauces.forEach((item, index) => {
            if (item.name === selectedSauce){
                findIndex = index
            }
        })
        sauces.splice(findIndex, 1)
        calcCostCaloriePizza()
        str = document.getElementById('pizzaSauce').innerHTML
        document.getElementById('pizzaSauce').innerHTML = str.replace(selectedSauce,'');
    }
        else{
            alert('Данный соус не был добавлен')
        }
}
function createPizza(){
    const pizzaJSON = new Pizza(base, ingredients, sauces).toJSON()
    console.log(pizzaJSON);
    fetch('http://localhost:3000', {
        method: 'POST',
        body: pizzaJSON,
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
        .then(result => result.json())
        .then(result => {
            alert('Ваш заказ принят')
        })
        .catch(error => {
            console.log(`Error: ${error.message}`)
            alert(`Error: ${error.message}`)
        })
}