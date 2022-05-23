const iceCream = [
  {
    name: "Cookie Dough",
    image:
      "https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg",
    price: 1,
    id: 1,
  },
  {
    name: "Vanilla",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg",
    price: 1,
    id: 2,
  },
  {
    name: "Strawberry",
    image:
      "https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg",
    price: 2,
    id: 3,
  },
];

const vessels = [
  {
    name: "Waffle Cone",
    image: "https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg",
    price: 2,
    id: 4,
  },
  {
    name: "Waffle Bowl",
    image: "http://images.wbmason.com/350/L_JOY66050.jpg",
    price: 4,
    id: 5,
  },
];

const toppings = [
  {
    name: "Sprinkles",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg",
    price: 1,
    id: 6,
  },
  {
    name: "Chocolate Chips",
    image:
      "https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360",
    price: 2,
    id: 7,
  },
];

// NOTE need to come back and clean up documentation

let order = [];

function drawTopping() {
  let template = "";

  toppings.forEach((item) => {
    template += `
    <div class="col-md-6 p-2">
    <div class="bg-dark rounded-top action shadow text-light" onclick="addToppingsToCart(${
      item.id
    })">
    <img
    class="w-100 rounded-top object-cover"
    height="300px"
    src="${item.image}"
    alt=""
    />
    <div class="d-flex justify-content-between">
    <h4>${item.name}</h4>
    <h4>${item.price.toFixed(2)}</h4>
    </div>
    </div>
    </div>
    `;
  });
  document.getElementById("topping-items").innerHTML = template;
}
drawTopping();

function drawVessels() {
  let template = "";

  vessels.forEach((item) => {
    template += `
    <div class="col-md-6 p-2">
    <div class="bg-dark rounded-top action shadow text-light " onclick="addVesselsToCart(${
      item.id
    })">
    <img
    class="w-100 rounded-top object-cover"
    height="300px"
    src="${item.image}"
    alt=""
    />
    <div class="d-flex justify-content-between">
    <h4>${item.name}</h4>
    <h4>${item.price.toFixed(2)}</h4>
    </div>
    </div>
    </div>
    `;
  });
  document.getElementById("vessel-items").innerHTML = template;
}
drawVessels();

function drawIceCream() {
  let template = "";

  iceCream.forEach((item) => {
    template += `
    <div class="col-md-6 p-2">
    <div class="bg-dark rounded-top shadow action text-light" onclick="addIceCreamToCart(${
      item.id
    })">
    <img
    class="w-100 rounded-top object-cover"
    height="300px"
    src="${item.image}"
    alt=""
    />
    <div class="d-flex justify-content-between">
    <h4>${item.name}</h4>
    <h4>${item.price.toFixed(2)}</h4>
    </div>
    </div>
    </div>
    `;
  });
  document.getElementById("iceCream-items").innerHTML = template;
}
drawIceCream();

function drawOrders() {
  let template = "";
  let total = 0;

  order.forEach((item) => {
    total += item.price;
    template += `
    <div>
              <ol>
                <li
                  class="d-flex justify-content-between border-bottom border-dark"
                >
                  <p>${item.name}</p>
                  <p>${item.price}</p>
                </li>
              </ol>
    `;
  });

  // document.getElementById("total").innerHTML = template;
  document.getElementById("order-items").innerHTML = template;
  document.getElementById("total").innerText = total.toFixed(2);
}
drawOrders();

function addIceCreamToCart(id) {
  let found = iceCream.find((item) => item.id == id);
  console.log(found);
  if (found) {
    order.push(found);
    console.log(order);
    drawOrders();
  }
}
addToCart();

function addToppingsToCart(id) {
  let found = toppings.find((item) => item.id == id);
  console.log(found);
  if (found) {
    order.push(found);
    console.log(order);
    drawOrders();
  }
}
addToppingsToCart();

function addVesselsToCart(id) {
  let found = vessels.find((item) => item.id == id);
  console.log(found);
  if (found) {
    order.push(found);
    console.log(order);
    drawOrders();
  }
}
addVesselsToCart();
