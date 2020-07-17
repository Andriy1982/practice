/*
  { name: 'greeps', price: 50 }
  { name: 'goosberry', price: 70 }
   { name: 'lemone', price: 60 }
*/

const cart = {
  items: [
    { name: "greeps", price: 50, quantity: 1 },
    { name: "goosberry", price: 70, quantity: 1 },
  ],
  getItems() {
    return this.items;
  },
  add(product) {
    for (const item of this.items) {
      console.log(item);
      if (item.name === product.name) {
        console.log("Takoy product est");
        item.quantity += 1;
        return;
      }
    }
    product.quantity = 1;
    this.items.push(product);
  },
  remove(productName) {
    console.log(productName);

    for (let i = 0; i < this.items.length; i += 1) {
      const item = this.items[i];

      if (productName === item.name) {
        console.log("Hello!");
        this.items.splice(i, 1);
      }
    }

    // for (const item of this.items) {
    //   if (productName === item.name) {
    //     console.log("Hello!");
    //   }
    // }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    let total = 0;

    for (let item of this.items) {
      total += item.price * item.quantity;
    }
    return total;
  },
  increaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        item.quantity += 1;
      }
    }
  },
  decreaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        if (item.quantity - 1 === 0) {
          this.remove(productName);
          return;
        }
        item.quantity -= 1;
      }
    }
  },
};

cart.add({ name: "greeps", price: 50 });
cart.add({ name: "goosberry", price: 70 });

console.table(cart.getItems());
// cart.remove("greeps");
cart.add({ name: "greeps", price: 50 });
// console.table(cart.getItems());
console.table(cart.getItems());
// cart.clear();
// console.table(cart.getItems());

console.log("Total: ", cart.countTotalPrice());
// cart.add({ name: "greeps", price: 50 });
// console.table(cart.getItems());
// cart.add({ name: "greeps", price: 50 });
// console.table(cart.getItems());
// cart.add({ name: "greeps", price: 50 });
// console.table(cart.getItems());
cart.increaseQuantity("goosberry");
cart.decreaseQuantity("goosberry");

cart.decreaseQuantity("goosberry");
cart.decreaseQuantity("goosberry");
console.table(cart.getItems());
