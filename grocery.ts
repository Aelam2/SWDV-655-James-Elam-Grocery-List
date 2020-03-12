class Grocery {
  name: String;
  brand: String;
  category: String;
  quantity: Number;

  constructor(name: String, brand: String, category: String, quantity: Number) {
    this.name = name;
    this.brand = brand;
    this.category = category;
    this.quantity = quantity;
  }
}

let groceryList = [
  new Grocery("Milk", "Generic", "fruits", 8),
  new Grocery("Honey wheat bread", "Nature's Own", "grains", 1),
  new Grocery("Cheerioes", "Genreral Mills", "cereal", 2),
  new Grocery("Chicken Breast", "Generic", "meat", 10)
];

const generateItem = (item: Grocery) => {
  return `${item.brand} ${item.name} - Quantity: ${item.quantity} - Category: ${item.category} `;
};

//Loop through items on grocery list
//Generate grocery items text
//Append list item to HTML
groceryList.forEach(g => {
  let node = document.createElement("li");
  let text = document.createTextNode(generateItem(g));
  node.appendChild(text);
  document.getElementById("GroceryList").appendChild(node);
});
