const menu = document.querySelectorAll('.menu-js');

function menuOpen() {
    document.querySelector('ul').classList.toggle('open');
}
function closeMenu() {
    document.querySelector('ul').classList.toggle('open');
}



const products = [{
    id: "123456789",
    name: 'Fall Limited edition Sneakers',
    price: 250.00,
    discount: 50,
    discription: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',

    image1: 'images/image-product-1.jpg',
    image2: 'images/image-product-2.jpg',
    image3: 'images/image-product-3.jpg',
    image4: 'images/image-product-4.jpg',


}]

let cart = [];


function genaratingHTML() {
    let HTML = ''
    const bottom = document.querySelector('.bottom');
    products.forEach((value, index) => {
        HTML += `<div id="carouselExample" class="carousel slide carosel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="${value.image1}" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src=${value.image2} class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src=${value.image3} class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src=${value.image4} class="d-block w-100" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    <div class="deatails">
        <p class="company">sneaker company</p>
        <h1>${value.name}</h1>
        <p class="para">${value.discription}
        </p>
        <div style="display: flex;gap: 20px;">
            <p class="price">$${(value.price * value.discount) / 100}</p>
            <p class="discount">${value.discount}%</p>
        </div>

        <p class="o-price">$${value.price}</p>
        <button class="js-button" id = "123456789">
            <img src="images/icon-cart.svg" alt="" style="margin-right: 20px;display: inline-block;">
            Add to cart
        </button>

    </div>`
    })

    bottom.innerHTML = HTML;
}

genaratingHTML();



const button = document.querySelector('.js-button');

button.addEventListener('click', () => {

    let cartDropHTML = '';
    let matchingProduct = 'no';
    cart.forEach((p)=>{
        if(p.id===button.id){
            p.quntity++;
            matchingProduct = 'yes';
        }
    })
    if(matchingProduct==='no'){
        cart.push({
        id : products[0].id,
        name : products[0].name,
        price : products[0].price,
        discount : products[0].discount,
        image : products[0].image1,
        quntity:1
    })
    }
    

    cart.forEach((v,i)=>{
        cartDropHTML+=`   
        <div class="cart-drop-wrap">
        <img src=${v.image} alt="" class="cart-drop-img">
        <div class="cart-drop-details">
            <p>${v.name}</p>
            <p>$${(v.price*v.discount)/100} x ${v.quntity} <span style="color: black;">$${(v.price*v.discount)/100*v.quntity}</span> </p>
            
        </div>
        <img src="images/icon-delete.svg" alt="">
        <button class="cart-drop-checkout" >Check out</button>
        </div>
    `
    })

    document.querySelector('.js').innerHTML=cartDropHTML;
})

document.querySelector('.cart').addEventListener('mouseover',()=>{
    document.querySelector('.cart-info').classList.toggle('cart-info-hover');
})




