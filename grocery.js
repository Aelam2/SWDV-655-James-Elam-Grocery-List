var Grocery = /** @class */ (function () {
    function Grocery(name, brand, category, quantity) {
        this.name = name;
        this.brand = brand;
        this.category = category;
        this.quantity = quantity;
    }
    return Grocery;
}());
//Create list of Grocery items
var groceryList = [
    new Grocery("Milk", "Generic", "fruits", 8),
    new Grocery("Honey wheat bread", "Nature's Own", "grains", 1),
    new Grocery("Cheerioes", "Genreral Mills", "cereal", 2),
    new Grocery("Chicken Breast", "Generic", "meat", 10)
];
//
var generateItem = function (item) {
    return item.brand + " " + item.name + " - Quantity: " + item.quantity + " - Category: " + item.category + " ";
};
groceryList.forEach(function (g) {
    var node = document.createElement("li");
    var text = document.createTextNode(generateItem(g));
    node.appendChild(text);
    document.getElementById("GroceryList").appendChild(node);
});
