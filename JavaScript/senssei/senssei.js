class Ninja {
    constructor(name,health){
        this.name=name;
        this.health=health;
        this.speed=3;
        this.strength=3;

    }

    sayName(){
        console.log( this.name);
    }
    showStats(){
        console.log(this.name);
        console.log(this.health);
        console.log(this.speed);
        console.log(this.strength);
    }
    
    drinkSake(){
        this.health+=10;
    }
}

class Senssei extends Ninja {
    constructor(name,wisdom){
        super(name,100)
        this.wisdom=10;
        this.speed=10;
        this.strength=10;
    }  
    speakWisdom(){
        super.drinkSake()
        console.log(this.wisdom);
       
    } 
    

}

const superSensei = new Senssei("Master Splinter");
superSensei.speakWisdom();
