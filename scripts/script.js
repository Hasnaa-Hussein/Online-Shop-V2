//Api
const usersApi = "https://afternoon-falls-30227.herokuapp.com/api/v1/products/";
//create http request
const xhr = new XMLHttpRequest();
xhr.open("GET", usersApi);
xhr.send();

xhr.onload = function () {
  if (xhr.status == 200) {
    const users = JSON.parse(xhr.response).data;

    // users list ELement
    const usersListEl = document.querySelector("#usersList");
    users.forEach((user) => {
      user.inCart = 0;
      // Create HTML elements
      const divEl = document.createElement("div");
      const imgEl = document.createElement("img");
      const pEl = document.createElement("p");
      const pEl2 = document.createElement("p");
      const linkEl = document.createElement("a");
      const iEl = document.createElement("i");

      // Add classes
      divEl.classList.add("divEl");
      imgEl.classList.add("img-thumbnail", "img-fluid");
      iEl.classList.add("fa", "fa-cart-arrow-down");
      linkEl.classList.add("addToCart");

      //Attributes
      imgEl.src = user.ProductPicUrl;
      pEl.innerText = `${user.Name}`;
      pEl2.innerText = `$${user.Price}`;
      // linkEl.href="#";
      linkEl.setAttribute("onmouseover","hoverLink(this)");
      linkEl.setAttribute("onmouseout" , "removerLinkHover(this)");
      iEl.ariaHidden = true;
      imgEl.setAttribute("onmouseover", "hoverMe(this)");
      imgEl.setAttribute("onmouseout", "removeHover(this)");

      //product description (Single Page Product)
      imgEl.onclick = function () {
        document.write(`<head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./assets/style.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <title>Home</title>
    </head>
    
    <body>
        <div class="container flex">
            <a href="index.html" class="element">Home</a>
            <a href="about.html" class="element">About</a>
            <a href="contactUs.html" class="element">Contact Us</a>
            <a href="cart.html" class="element"><i class="fa fa-shopping-cart" aria-hidden="true"></i><span>0</span></a>
        </div>
        
        </body>`);
        const divContainer = document.createElement("div");
        const divFlex = document.createElement("div");
        const divContent = document.createElement("div");
        const divContent2 = document.createElement("div");
        const divContent3 = document.createElement("div");
        const imgProd = document.createElement("img");
        const hType = document.createElement("p");
        const pName = document.createElement("p");
        const pProduct = document.createElement("p");
        const priceProd = document.createElement("p");
        const quantity = document.createElement("p");
        const inputQun = document.createElement("input");
        const inputBtn = document.createElement("input");

        divContainer.classList.add("contain");
        divFlex.classList.add("flex");
        divContent.classList.add("content", "imgC");
        divContent2.classList.add("content");
        divContent3.classList.add("content");
        imgProd.classList.add("imgClass");
        pProduct.classList.add("desc");
        pName.classList.add("nameP");
        hType.classList.add("typ");
        priceProd.classList.add("pric");
        quantity.classList.add("qnt");
        inputQun.classList.add("inptQnt");
        inputBtn.classList.add("inptBtn", "addToCart");

        imgProd.src = user.ProductPicUrl;
        hType.innerText = `${user.Category}`;
        pName.innerText = `${user.Name}`;
        pProduct.innerText = `${user.Description}`;
        priceProd.innerText = `$${user.Price}`;
        quantity.innerText = "Quantity";
        inputBtn.type = "submit";
        inputBtn.value = "Add to cart";
        inputQun.type = "number";
        // inputQun.min = "0";
        // inputQun.step = "1";
        inputQun.value = "1";
        inputQun.disabled = true;
        inputBtn.onclick = function () {
          const us = user;
          cartNumbers(us);
          productCost(us);
        };

        divContent.appendChild(imgProd);
        divContent2.appendChild(hType);
        divContent2.appendChild(pName);
        divContent2.appendChild(pProduct);
        divContent3.appendChild(priceProd);
        divContent3.appendChild(quantity);
        divContent3.appendChild(inputQun);
        divContent3.appendChild(inputBtn);
        divFlex.appendChild(divContent);
        divFlex.appendChild(divContent2);
        divFlex.appendChild(divContent3);
        divContainer.appendChild(divFlex);
        document.body.appendChild(divContainer);
        onLoadCartNumbers();
      };

      //add to cart
      linkEl.onclick = function () {
        const u = user;
        //console.log("hello");
        cartNumbers(u);
        // console.log(u);
        //console.log(user);
        productCost(u);
      };

      // Styles
      divEl.style.width = "30%";
      divEl.style.marginLeft = "42px";
      divEl.style.borderRight = "1px solid rgb(214, 212, 212)";

      iEl.style.fontSize = "40px";
      iEl.style.color = "#2773b2";

      pEl.style.color = "#2F6797";
      pEl.style.fontWeight = "bold";
      pEl.style.fontSize = "18px";

      pEl2.style.color = "red";
      pEl2.style.fontWeight = "bold";
      pEl2.style.fontSize = "25px";

      linkEl.style.float = "right";

      imgEl.style.width = "100%";

      //append
      divEl.appendChild(pEl);
      divEl.appendChild(imgEl);
      divEl.appendChild(pEl2);
      usersListEl.appendChild(divEl);
      linkEl.appendChild(iEl);
      pEl2.appendChild(linkEl);
    });

    //console.log(users);
  } else {
    alert("Something went wrong.");
  }
};

/** ------------------------------**/
//functions
//on hover product Image  (Home Page)
function hoverMe(x) {
  x.style.border = "1px solid rgb(214, 212, 212)";
  x.style.opacity = "0.7";
}
//remove hover product image (Home Page)
function removeHover(x) {
  x.style.border = "none";
  x.style.borderRight = "1px solid rgb(214, 212, 212)";
  x.style.opacity = "1";
}
//on hover cart icon 
function hoverLink(x){
  x.style.opacity = "0.7";
  x.style.cursor = "pointer";
  
}
//remove hover cart icon
function removerLinkHover(x){
  x.style.opacity = "1";
  x.style.cursor = "context-menu";
}

//number of items added to the cart
function cartNumbers(product) {
  //console.log(product);
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = Number(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".element span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".element span").textContent = 1;
  }
  setItems(product);
}
//to load cart number in local storage to the cart item
function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector(".element span").textContent = productNumbers;
  }
}
//add products to cart and set/reset inCart numbers
function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  if (cartItems != null) {
    if (cartItems[product.ProductId] == undefined) {
      cartItems = {
        ...cartItems,
        [product.ProductId]: product,
      };
    }
    cartItems[product.ProductId].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.ProductId]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
  // console.log(cartItems);
  // console.log(product.ProductId);
}
//to calculate cost of product added to cart
function productCost(product) {
  // console.log(product.Price);
  let cartCost = localStorage.getItem("totalCost");
  if (cartCost != null) {
    cartCost = Number(cartCost);
    localStorage.setItem("totalCost", cartCost + product.Price);
  } else {
    localStorage.setItem("totalCost", product.Price);
  }
}
//to load number of items in cart to cart item
onLoadCartNumbers();
