const cartContainer = document.querySelector('.cart-container');

const productList = document.querySelector('.product-list');
const cartList = document.querySelector('.cart-list');
const cartTotalValue = document.getElementById('cart-total-value');

let cartItemID = 0;

eventListeners();


function eventListeners() {
    window.addEventListener('DOMContentLoaded', () => {
        loadJSON();
    });
    productList.addEventListener('click' , purchaseProduct);
}
// show & hide Cart
function toggleHide() {
    let container = document.getElementById('cart');

    if (container.style.display != 'none') {
        container.style.display = 'none';
    }
    else {
        container.style.display = 'block';
    }
}
//Loading products from JSON to our Shop page
function loadJSON() {
    fetch('shop.json')
        .then(Response => Response.json())
        .then(data => {
            let html = '';
            data.forEach(product => {
                html += `
            <div class="product text-center col-lg-3 col-md-6 col-12">
        <img class="img-fluid mb-3 p-img" src="${product.imgsrc}" alt="">
        <div class="star">
          <i class='bx bxs-star'></i>
          <i class='bx bxs-star'></i>
          <i class='bx bxs-star'></i>
          <i class='bx bxs-star'></i>
          <i class='bx bxs-star'></i>
        </div>
        <h5 class="p-name">${product.name}</h5>
        <h4 class="p-price">${product.price}</h4>
        <button class="buy-button" onclick ="msg()">Add to Cart</button>

      </div>
      `;
            });

            document.getElementById('all').innerHTML = html;
        })
        
}
//cart hide/show and show cart items

function toggleHide(){
    let cart= document.getElementById('cart');

    if(cart.style.display != 'none' ){
        cart.style.display = 'none';
    }
    else{
        cart.style.display = 'block';
    }
    //To show items in cart after clicking on bag icon
       for(i=0; i<itemArray.length; i++)
        {
           document.getElementById('cart-list').innerHTML = itemArray[i];
        }
        
       /* for(i=0; i<itemArray.length; i++)
        {
           localStorage.setItem("array" , itemArray[i]);
        }
        for(i=0; i<itemArray.length; i++)
        {
           document.getElementById('cart-list').innerHTML = localStorage.getItem("array");
        }
        */

        window.scrollTo(0, 0); 
}
// Add to cart 

function purchaseProduct(e){
    if(e.target.classList.contains('buy-button')){
        let product = e.target.parentElement;
        
        getProductInfo(product);
    }
    cartItemID ++;
    
}

 function getProductInfo(product){
    let productInfo = {
        id :cartItemID,
        imgsrc : product.querySelector('.p-img').src,
        name : product.querySelector('.p-name').textContent,
        price :product.querySelector('.p-price').textContent,
    }

      addtocart(productInfo);
 }

 let item='';
 let itemArray = new Array();
 
 function addtocart(productInfo){    
         item += `<tr>
            <td><a href="#"><i class='bx bxs-trash-alt'></i></a></td>
            <td><img src="${productInfo.imgsrc}" alt="Loading"></td>
            <td><h5 class="cart-item-name"> ${productInfo.name}</h5></td>
            <td><h5 class="cart-item-price"> ${productInfo.price} </h5></td>
            <td><h5 class="cart-total-value"> ${productInfo.price} </h5></td>
          </tr>`; 
   //storing sleceted item in array
    itemArray[cartItemID] = item;
    
        document.getElementById('count').innerHTML = itemArray.length;
        if(itemArray.length>1){
        document.getElementById('item-count').innerHTML ='Total-item:'+ itemArray.length; 
        document.getElementById('checkout').innerHTML = `<button id="checkout">CheckOut</button>`;
        }

 }
 
          
           
  //To show aknowledgement msg after clicking on add to cart button
  
  function msg()
  {
    let msg = document.getElementById('msg-appear');
    msg.style.display ='block';
    setTimeout(hideElement, 1500);

    function hideElement(){
          msg.style.display ='none';
    }
  }
 
 



    
 
 