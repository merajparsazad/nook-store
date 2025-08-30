import handleAuth from "./utils/authorization.js";
import { getData } from "./utils/httpReq.js";
import { shortenText } from "./utils/stringFunc.js";

const mainContent = document.getElementById("container");
const logoutButton = document.querySelector("button");

const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const renderUsers = (users) => {
  mainContent.innerHTML = "";

  users.forEach((user) => {
    const cardJsx = document.createElement("div");
    cardJsx.id = "card";
    cardJsx.innerHTML = `
            <h3>${user.id}</h3>
            <div>
                <p><i class="fa-solid fa-user"></i>Name:</p>
                <span>${user.name.firstname} ${user.name.lastname}</span>
            </div>
            <div>
                <p><i class="fa-solid fa-paperclip"></i>Username:</p>
                <span>${user.username}</span>
            </div>
            <div>
                <p><i class="fa-solid fa-envelope"></i>Email:</p>
                <span>${user.email}</span>
            </div>
            <div>
                <p><i class="fa-solid fa-phone"></i>Phone:</p>
                <span>${user.phone}</span>
            </div>
            <div>
                <p><i class="fa-solid fa-location-dot"></i>Address:</p>
                <span>${user.address.city} - ${user.address.street} - ${user.address.zipcode}</span>
            </div>
            <div>
              <p><i class="fa-solid fa-cart-shopping"></i>Cart:</p>
              <button id="view-cart">View</button>
            </div>
              `;

    const viewButton = cardJsx.querySelector("#view-cart");
    viewButton.addEventListener("click", async () => {
      const modalBody = document.getElementById("modal-body");
      modalBody.innerHTML = "";
      document.getElementById("modal").classList.add("show");
      modalBody.innerHTML += `<span id="loader"></span>`;
      const cart = await getData(`carts/${user.id}`);
      modalBody.innerHTML = "";
      if (!cart) {
        modalBody.innerHTML = "<p>No purchases found</p>";
      } else {
        const cartJsx = document.createElement("div");
        cartJsx.innerHTML = `
            <p><strong>Owner:</strong> ${user.name.firstname}</p>
            <p><strong>Purchase date:</strong> ${formatDate(cart.date)}</p>
            <p><strong>Products:</strong></p>
            <div id="cart-products"></div>
          `;
        modalBody.appendChild(cartJsx);
      }

      const cartProducts = modalBody.querySelector("#cart-products");
      const AllProducts = await getData("products");
      let totalPrice = 0;

      AllProducts.forEach((product) => {
        cart?.products.forEach((cartProduct) => {
          if (cartProduct.productId === product.id) {
            const sumEachProductPrice = product.price * cartProduct.quantity;
            totalPrice += sumEachProductPrice;

            const productsJsx = `
              <div id="chosen-products">
                <div id="item-info">
                  <img alt=${shortenText(product.title)} src=${product.image} />
                  <div>
                    <p>${shortenText(product.title)}</p>
                    <p id="shipping">Free shipping</p>
                  </div>
                </div>
                <div id="item-cost">
                  <p>Cost per item: ${product.price}$</p>
                  <p>Quantity: ${cartProduct.quantity}</p>
                </div>
              </div>
            `;

            cartProducts.innerHTML += productsJsx;
          }
        });
      });

      const orderjsx = `
              <div id="order">
                <div>
                  <p>Payment amount: </p>
                  <p>${totalPrice}$</p>
                </div>
                <button>Order</button>
              </div>
              `;
      if (cartProducts) cartProducts.innerHTML += orderjsx;
    });

    mainContent.appendChild(cardJsx);
  });
};

const init = async () => {
  handleAuth();
  const users = await getData("users");
  renderUsers(users);
};

const handleLogout = () => {
  document.cookie = "token=; max-age=0";
  location.assign("index.html");
};

document.addEventListener("DOMContentLoaded", init);
logoutButton.addEventListener("click", handleLogout);

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-xmark")) {
    document.getElementById("modal").classList.remove("show");
  }
});
document.addEventListener("click", (e) => {
  const modal = document.getElementById("modal");
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});
