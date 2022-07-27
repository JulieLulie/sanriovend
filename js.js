//Create variables for each milk and number of cartons
var bananaMilk;
var strawberryMilk;
var taroMilk;
var plainMilk;
var numberOfCartons;

//Create variables for prices
var priceOfBMilk = 5.50;
var priceOfSMilk = 6.00;
var priceOfTMilk = 6.50;
var priceofPMilk = 5.00;

//Create bariables for money inserted, total cost, and change
var moneyInserted;
var totalCost;
var change;

function buyBMilk(){
    //Get milk
    bananaMilk = prompt("You have chosen Banana Milk. It is $5.50 per carton. How many cartons would you like?")

    //Quit if user clicked on cancel
    if (bananaMilk == null) {
        return;
    }
}

    //repeat for strawberry milk
    function buySMilk(){
    strawberryMilk = prompt("You have chosen Strawberry Milk. It is $6.00 per carton. How many cartons would you like?")

    if (strawberryMilk == null) {
        return;
    }
}

    //repeat for taro milk
    function buyTMilk(){
        taroMilk = prompt("You have chosen Taro Milk. It is $6.50 per carton. How many cartons would you like?")
    
        if (taroMilk == null) {
            return;
        }
    }

        //repeat for plain milk
    function buyPMilk(){
        plainMilk = prompt("You have chosen Plain Milk. It is $5.00 per carton. How many cartons would you like?")
    
        if (plainMilk == null) {
            return;
        }
    }