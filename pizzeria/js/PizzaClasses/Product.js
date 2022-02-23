class Product{
    name
    cost
    calories
    /**
     * 
     * @param {Object} ProductInfo 
     */

    constructor(ProductInfo)
    {
        this.name = ProductInfo['name'];
        this.cost = ProductInfo['cost'];
        this.calories = ProductInfo['calories'];
    }
    /**
     * 
     * @returns {Number}
     */
    get name(){return this.name;}
    /**
     * 
     * @returns {Number}
     */

    get cost(){return this.cost;}
    /**
     * 
     * @returns {Number}
     */

    get calories() {return this.calories;}

    set name(value){
        if (value === '' || value === undefined){
            throw new Error('Неверное наименование ингредиента')
        }
        this.name = value;
    }
    set cost(value){
        if (value === '' || value === undefined){
            throw new Error('Неверная цена ингредиента')
        }
        this.cost = value;
    }
    set calories(value){
        if (value === '' || value === undefined){
            throw new Error('Неверная каллорийность ингредиента')
        }
        this.cost = value;
    }
    [Symbol.toPrimitive](product){
        return product === 'string'?
            `Ингредиент: ${this.name}, цена: ${this.cost}, калорийность: ${this.calories}` :
            `${this.cost}`
    }
    toJSON(){
        return JSON.stringify({
           'name' : this.name,
           'cost' : this.cost,
           'calories' : this.calories
       })
    }
}