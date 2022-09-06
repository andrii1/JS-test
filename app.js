//exercise 1

function logOutNumbers() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Jackpot");
    } else if (i % 3 === 0) {
      console.log("This is divisible by 3");
    } else if (i % 5 === 0) {
      console.log("This is divisible by 5");
    } else {
      console.log(i);
    }
  }
}

logOutNumbers();

//exercise 2
const imageDiv = document.getElementById("image-div");
const btn = document.createElement("button");
btn.innerHTML = "Click Me";
document.body.appendChild(btn);

function insertImg() {
  imageDiv.innerHTML = "";
  const img = document.createElement("img");
  img.src = "https://picsum.photos/200";
  imageDiv.appendChild(img);
}

btn.addEventListener("click", insertImg);

//exercise 3
fetch("https://reqres.in/api/users")
  .then((response) => response.json())
  .then((res) => {
    res.data
      .filter((user) => user.id <= 3)
      .forEach((element) => {
        console.log(element.first_name);
      });
  });

//exercise 4

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  logProduct() {
    console.log(
      `${this.name.charAt(0).toUpperCase() + this.name.slice(1)} is ${
        this.price
      } kr`
    );
  }
}

const table = new Product("table", 1200);
table.logProduct(); // 'Table costs 1200 kr'
