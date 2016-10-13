var Job = {
    company: "Firehouse Subs",
    position: "Crew Member",
    location: "99999 W 9th Street",
    responsibility: "Backstore Cleanup"
};

var hours;
if (Job.position === "Crew Member") {
    hours = 3;
} else {
    hours = 8;
}

var announce = "Hi I work at " + Job.company + " as a "+ Job.position + " my main responsibility includes " + Job.responsibility + ". I work a total of " + hours + " hours. Come check us out at " + Job.location + ".";
function literalNotation() {
    document.write(announce);
}





//Vehicle constructor, this will become the prototype for th parent class of all //Vehicles
var Food = function(name, type, toppings, servings) {
    this.name = name;
    this.type = type;
    this.toppings = toppings;
    this.servings = servings;
};

// encapsulates a method to display any Vehicle
Food.prototype.displayFood = function() {
    document.write("<input type='text' size='100' value=\'" + this.name +
        ": top speed = " + this.type + " " + this.toppings +
        ", costs $" + this.servings.toFixed(2)  + "\'><br><br>");
    this.launchFood();

};

// encapsulates a method to launch the Vehicle
Food.prototype.launchFood = function () {
    document.write("<textarea rows = '6' cols='50' id=\'" + this.name + "\'>" + "Text area" + "</textarea><br><br>");
    document.getElementById(this.name).innerHTML = "A piping hot serving of " + this.name + "!";
};

function Pizza(name, type, toppings, servings, cookTime) {
    Food.call(this, name, type, toppings, servings);
    this.cookTime = cookTime;
}

Pizza.prototype = Object.create(Food.prototype);

Pizza.prototype.constructor = Pizza;

Pizza.prototype.displayFood = function() {
    document.write("<input type='text' size='100' value=\'" + this.name +
        ": type = " + this.type +
        ", toppings include " + this.toppings + " and has " +
        this.cookTime + " minutes cooking time"  + "\'><br><br>");
    this.launchFood();
};
Pizza.prototype.launchFood = function() {
    document.write("<textarea rows = '6' cols='50' id=\'" + this.name + "\'>" +
        "Text area" + "</textarea><br><br>");
    var output = "";
    output += "3 seconds left\n";
    output += "2 seconds left\n";
    output += "1 second left\n";
    output += "YAY FOOOOOOD";
    document.getElementById(this.name).innerHTML = output;
};

function Fudge(name, type, toppings, servings, cookTime) {
    Food.call(this, name, type, toppings, servings);
    this.cookTime = cookTime;
}

Fudge.prototype = Object.create(Food.prototype);

Fudge.prototype.constructor = Pizza;

Fudge.prototype.displayFood = function() {
    document.write("<input type='text' size='100' value=\'" + this.name +
        ": type = " + this.type +
        ", toppings include " + this.toppings + " and has " +
        this.cookTime + " minutes cooking time"  + "\'><br><br>");
    this.launchFood();
};
Fudge.prototype.launchFood = function() {
    document.write("<textarea rows = '6' cols='50' id=\'" + this.name + "\'>" +
        "Text area" + "</textarea><br><br>");
    var output = "";
    output += "10 seconds left\n";
    output += "skip 9 seconds\n";
    output += "1 second left\n";
    output += "WOW I really like fudge";
    document.getElementById(this.name).innerHTML = output;
};

function Soup(name, type, toppings, servings, cookTime) {
    Food.call(this, name, type, toppings, servings);
    this.cookTime = cookTime;
}

Soup.prototype = Object.create(Food.prototype);

Soup.prototype.constructor = Pizza;

Soup.prototype.displayFood = function() {
    document.write("<input type='text' size='100' value=\'" + this.name +
        ": type = " + this.type +
        ", toppings include " + this.toppings + " and has " +
        this.cookTime + " minutes cooking time"  + "\'><br><br>");
    this.launchFood();
};
Soup.prototype.launchFood = function() {
    document.write("<textarea rows = '6' cols='50' id=\'" + this.name + "\'>" +
        "Text area" + "</textarea><br><br>");
    var output = "";
    output += "soup\n";
    output += "Soup\n";
    output += "SOUP\n";
    output += "Lez eat some Soup";
    document.getElementById(this.name).innerHTML = output;
};

function Burger(name, type, toppings, servings, cookTime) {
    Food.call(this, name, type, toppings, servings);
    this.cookTime = cookTime;
}

Burger.prototype = Object.create(Food.prototype);

Burger.prototype.constructor = Pizza;

Burger.prototype.displayFood = function() {
    document.write("<input type='text' size='100' value=\'" + this.name +
        ": type = " + this.type +
        ", toppings include " + this.toppings + " and has " +
        this.cookTime + " minutes cooking time"  + "\'><br><br>");
    this.launchFood();
};
Burger.prototype.launchFood = function() {
    document.write("<textarea rows = '6' cols='50' id=\'" + this.name + "\'>" +
        "Text area" + "</textarea><br><br>");
    var output = "";
    output += "Ham\n";
    output += "Cheese\n";
    output += "Bun\n";
    output += "one great looking hamburger";
    document.getElementById(this.name).innerHTML = output;
};


function main() {
    //instantiate an array to hold vehicles
    var foodArray = [];
    //populate the vehicle array with objects and subclass objects
    foodArray[0] = new Food("Italian", "Italian", "Seasonings and Dressings", 10);
    foodArray[1] = new Pizza("Pizza", "Italian", "Pepperoni", 6, 10);
    foodArray[2] = new Fudge("Chocolate Fudge", "Americano", "Chocolate syrup", 1, 200);
    foodArray[3] = new Soup("Soup", "French...", "anything", 2, 1);
    foodArray[4] = new Burger("Burger", "American", "Ketchup or Mustard", 1, 3);

    for(var i = 0; i < foodArray.length; i++) {
        foodArray[i].displayFood();
    }
}