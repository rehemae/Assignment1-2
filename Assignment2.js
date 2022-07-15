class KioskCalc{
    constructor(fruits,quantity){
        this.fruits=fruits
        this.quantity= quantity
        this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 };
        this. getTotalCost= function(){
            return `${quantity} ${fruits} for ${quantity * this.fruitsPriceList.mango}`
            
        }
        

    }
    
}
let kioskCalc = new KioskCalc("mango", 2);
console.log(kioskCalc.getTotalCost( ) )
