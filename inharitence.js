class Parent{
    constructor(){
        this.fatherName = "Salam";
    }
    getFullName(){
        return this.name + " " +this.fatherName;
    }
}

  

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
}

const baby = new Child("Anawer")
const baby2 = new Child("Tom")
console.log(baby.getFullName());
console.log(baby2);