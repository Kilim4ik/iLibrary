const car = `{ 
    "brand": "dodge" , 
    "model" : "challenger",
    "vinNum" : 77889900 , 
    "owner" : "Jone Brawn",
    "hp":717,
    "countOfWheals": 4 ,
    "tirePressure " : {
        "fl": 31, 
        "fr" : 34,
        "bl" : 34,
        "br" : 33
    },
    "historyOfAccidents" : []

}`;
console.log(JSON.parse(car));
