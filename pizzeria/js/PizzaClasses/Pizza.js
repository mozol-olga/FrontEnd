class Pizza{
    base
    product
    sause
    /**
     * @param base {Base}
     * @param product {Product[]}
     * @param sause {Sause[]}
     */

     constructor(base, product, sause)
     {
         this.base = base;
         this.product = product;
         this.sause = sause;
     }

     /**
     * 
     * @returns {Base}
     */
    get base(){
        return this.base;
    }
    /**
     * 
     * @returns {Product[]}
     */

    get product(){
        return this.product;
    }
    /**
     * 
     * @returns {Sause[]}
     */

    get sause() {
        return this.sause;
    }

    set base(value){
        if (value === '' || value === undefined){
            throw new Error('Неверное название основы')
        }
        this.base = value;
    }
    set product(value){
        if (value === '' || value === undefined){
            throw new Error('Ингредиенты не добавлены')
        }
        this.product = value;
    }
    set sause(value){
        if (value === '' || value === undefined){
            throw new Error('Соус не выбран')
        }
        this.sause = value;
    }
    toJSON(){
        return JSON.stringify({
            'base' : this.base,
            'product' : this.product,
            'sauce' : this.sauces
        })
    }
}