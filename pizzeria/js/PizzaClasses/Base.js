class Base{
    name
    cost
    calories
    /**
     * 
     * @param {Object} BaseInfo 
     */

    constructor(BaseInfo)
    {
        this.name = BaseInfo['name'];
        this.cost = BaseInfo['cost'];
        this.calories = BaseInfo['calories'];
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
            throw new Error('Неверное название основы')
        }
        this.name = value;
    }
    set cost(value){
        if (value === '' || value === undefined){
            throw new Error('Неверная цена основы')
        }
        this.cost = value;
    }
    set calories(value){
        if (value === '' || value === undefined){
            throw new Error('Неверная каллорийность основы')
        }
        this.cost = value;
    }
    [Symbol.toPrimitive](baseName){
        return baseName === 'string'?
            `Основа: ${this.name}, цена: ${this.cost}, калорийность: ${this.calories}` :
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