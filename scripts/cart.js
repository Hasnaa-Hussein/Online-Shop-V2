function onLoadCartNumbers(){
  let productNumbers = localStorage.getItem('cartNumbers');
  if(productNumbers){
    document.querySelector('.element span').textContent=productNumbers;
  }
}

function displayCart(){
  //get from local storage
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  let cartCost = localStorage.getItem('totalCost');
  
  
  if(cartItems ){
    
    Object.values(cartItems).map(item=> {
      const tbdy = document.getElementById("cart_table");
      const trEl = document.createElement("tr");
      const tdEl1 = document.createElement("td");
      const tdEl2 = document.createElement("td");
      const tdEl3 = document.createElement("td");
      const tdEl4 = document.createElement("td");
      const tdEl5 = document.createElement("td");
      const tdEl6 = document.createElement("td");
      const linkPro = document.createElement("a");
      const quantityInput = document.createElement("input");
      //const quantityBtn = document .createElement("input");
      const quantityDiv = document.createElement("div");
      const iElPro = document.createElement("i");
      const imgElPro = document.createElement("img");
      const spanElPro = document.createElement("span");

      iElPro.classList.add("fa","fa-times");
      imgElPro.classList.add("imgCart");
      spanElPro.classList.add("txt");
      tdEl1.classList.add("tdCl");
      tdEl2.classList.add("tdCl");
      tdEl3.classList.add("tdCl");
      tdEl4.classList.add("tdCl");
      tdEl5.classList.add("tdCl");
      tdEl6.classList.add("tdCl");
      quantityInput.classList.add("inptQnt2");

      trEl.setAttribute("id",item.ProductId);
      iElPro.ariaHidden = true;
      imgElPro.src=item.ProductPicUrl;
      spanElPro.innerText=`${item.Name}`;
      tdEl2.innerText=`$ ${item.Price}.00`;
      quantityInput.type="number";
      quantityInput.disabled = true;
      //quantityInput.min="0";
      //quantityInput.step="1";
      quantityInput.value = item.inCart;
      // quantityBtn.type = "submit";
      // quantityBtn.value = "Update";
      // quantityBtn.style.marginTop = "10px";
      // quantityBtn.style.width = "fit-content";
      tdEl4.innerText = `$ ${item.inCart * item.Price}.00`;
      tdEl1.style.width="400px";
      quantityInput.style.width = '100px';

      linkPro.appendChild(iElPro);
      tdEl5.appendChild(linkPro);
      tdEl6.appendChild(imgElPro);
      tdEl1.appendChild(spanElPro);
      //quantityDiv.appendChild(quantityBtn);
      tdEl3.appendChild(quantityInput);
      tdEl3.appendChild(quantityDiv);
      trEl.appendChild(tdEl5);
      trEl.appendChild(tdEl6);
      trEl.appendChild(tdEl1);
      trEl.appendChild(tdEl2);
      trEl.appendChild(tdEl3);
      trEl.appendChild(tdEl4);
      tbdy.appendChild(trEl);

      
      linkPro.onclick = function(){
        
        let cartItems = localStorage.getItem('productsInCart');
        let productNumbers = localStorage.getItem('cartNumbers');
        let cartCost = localStorage.getItem('totalCost');
        cartCost = Number(cartCost);
        productNumbers = Number(productNumbers);
        cartItems = JSON.parse(cartItems);
        let proId = item.ProductId;
        let inCartNum = cartItems[proId].inCart;
        cartCost -= item.Price * inCartNum; 
        productNumbers -=inCartNum;
        let pNum = JSON.stringify(productNumbers);
        localStorage.setItem('cartNumbers',pNum);
        let cCost = JSON.stringify(cartCost);
        localStorage.setItem('totalCost',cCost);
        

        let ElSelector = document.querySelector(`#${proId}`);
        delete (cartItems[proId]);
        ElSelector.style.display = 'none';
        let nCartObj = JSON.stringify(cartItems); 
        localStorage.setItem('productsInCart',nCartObj);

        //refresh page to update after delete
        location.reload();


        // console.log(inCartNum);
        // console.log(productNumbers);
        // console.log(document.querySelector('#HT-1002'));
        // console.log(this);
        // console.log(proId);
        // console.log(document.querySelector(`#${proId}`));



      }
      //quantityBtn.onclick = updateCartNumber(item);

    });
  }   
  const tfo = document.getElementById("cart_foot");
  const trFo = document.createElement("tr");
  const tdElFo1 = document.createElement("td");
  const tdElFo2 = document.createElement("td");

  tdElFo1.colSpan="3";
  tdElFo2.colSpan="3";
  tdElFo1.innerText="Toatal Cost";
  tdElFo2.innerText=`$ ${Number(cartCost)}.00`;
  
  tdElFo1.classList.add("tdCl","tdFo");
  tdElFo2.classList.add("tdCl","tdFo2");
  trFo.classList.add("trFo");

  trFo.appendChild(tdElFo1);
  trFo.appendChild(tdElFo2);
  tfo.appendChild(trFo);
}


displayCart();
onLoadCartNumbers();

