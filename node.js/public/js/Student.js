class Student{
    id
    name
    surname
    age
    speciality
     /**
     *
     * @param id {Number}
     * @param name {String}
     * @param surname {String}
     * @param age {Number}
     * @param speciality {String}
     */
    constructor(id, name, surname, age, speciality){
        this.id = id
        this.name = name
        this.surname = surname
        this.age = age
        this.speciality = speciality
    }
    get id(){
        return this.id
    }

    get name(){
        return this.name
    }
    get surname(){
        return this.surname
    }

    get age(){
        return this.age
    }
    get speciality(){
        return this.speciality
    }

    set id(value){
       this.id = value
    }
    set name(value){
        this.name = value
    }
    set surname(value){
        this.surname = value
    } 
    set age(value){
        this.age = value
    }
    set speciality(value){
        this.speciality = value
    }
}