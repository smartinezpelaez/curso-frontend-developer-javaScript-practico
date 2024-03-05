const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobilMenu = document.querySelector('.mobile-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobiltopMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

//aparecemos y desaparecemos el menu del lado derecho
function toggleDesktopMenu(){
   // console.log('Click');
   const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

   if (!isAsideClosed){
    shoppingCartContainer.classList.add('inactive'); 
   }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobiltopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive'); 
    }
    mobilMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobilMenu.classList.contains('inactive');    
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');    

    if (!isMobileMenuClosed){
        mobilMenu.classList.add('inactive'); 
    }
    
    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive'); 
    }
    shoppingCartContainer.classList.toggle('inactive');
   
}

const productList = [];
productList.push({
    name:'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

//Renderizamos la funcion para que sea reutlizable
function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
       
        // product = {name, price, image} => product.image
        const productImg = document.createElement( 'img' );
        productImg.setAttribute('src', product.image);
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('productInfo');
       
        const productInfoDiv = document.createElement('div');
       
        const productPrice = document.createElement('p');
        productPrice.innerText= '$' + product.price;
       
        const  productName = document.createElement('p');
        productName.innerText= product.name;
       
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
       
        const productInfoFigure = document.createElement( 'figure' );
       
        const productImgCart = document.createElement('img') ;
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
       
        productInfoFigure.appendChild(productImgCart);
        
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
       
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
       
        cardsContainer.appendChild(productCard);
       }
}

renderProducts(productList);