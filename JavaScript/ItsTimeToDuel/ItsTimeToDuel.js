class Card{
    constructor(name,cost){
        this.name=name;
        this.cost=cost;
    }
}

class Unit extends Card{
    constructor(name,cost,power,res){
        super(name,cost)
        this.power=power;
        this.resilience=resilience;
    }
   attack(target){

   } 
}
class Effect extends Card{
    constructor(name,cost,magnitude,stat){
        super(name,cost);
            this.magnitude=magnitude;
            this.stat=stat;  
    }

play( target ) {
    if( target instanceof Unit ) {
        target[this.stat] +=this.magnitude;
        let x="increase";
        if(this.magnitude<0){
            x="reduce";
        }
     
            console.log("${x} target's${this.stat}  by ${Math.abs(this.magnitude)} ");
            console.log(target);
    } else {
        throw new Error( "Target must be a unit!" );
    }
}
}
const redBeltNinja=new Unit("Red Belt Ninja",3,3,4);
const blackBeltNinja=new Unit("Black Belt Ninja",4,5,4);
const hardAlgo=new Effect("Hard Algorithm",2,3,"resilience");
const UnhandledPromiseRejection=new Effect("Unhandled Promise Rejection",1,2,"resilience");
const PairProgramming	=new Effect("Pair Programming",3,2,"Power");
hardAlgo.play(redBeltNinja);



