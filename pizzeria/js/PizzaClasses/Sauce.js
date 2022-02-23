class Sauce{
    name
    cost
    calories
    /**
     * 
     * @param {Object} SauceInfo 
     */

    constructor(SauceInfo)
    {
        this.name = SauceInfo['name'];
        this.cost = SauceInfo['cost'];
        this.calories = SauceInfo['calories'];
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
            throw new Error('Неверное наименование соуса')
        }
        this.name = value;
    }
    set cost(value){
        if (value === '' || value === undefined){
            throw new Error('Неверная цена соуса')
        }
        this.cost = value;
    }
    set calories(value){
        if (value === '' || value === undefined){
            throw new Error('Неверная каллорийность соуса')
        }
        this.cost = value;
    }
    [Symbol.toPrimitive](sauseName){
        return sauseName === 'string'?
            `Соус: ${this.name}, цена: ${this.cost}, калорийность: ${this.calories}` :
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