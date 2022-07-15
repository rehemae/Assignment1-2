function calculateFruitCost(name,quantity){
    price=30.00
   let totalcost = `${quantity} ${name} for ${price*quantity} KES`;
   return totalcost;
    
}
console.log(calculateFruitCost("Mangos",2));




