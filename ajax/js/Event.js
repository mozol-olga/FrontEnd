class Event{
    date
    time
    name
    importance
    note

    /**
     *
     * @param date {Date}
     * @param time {Date}
     * @param name {String}
     * @param importance {String}
     * @param note {String}
     */

    constructor(date,time,name,importance,note) {
        this.date = date
        this.time = time
        this.name = name
        this.importance = importance
        this.note = note
    }
    
    get date(){return this.date}

    get time(){return this.time}

    get name(){return this.name}

    get importance(){return this.importance}

    get note(){return this.note}

    set date(value){this.date = value}

    set time(value){this.time = value}

    set name(value){this.name = value}

    set importance(value){this.importance = value}

    set note(value){this.note = value}

}