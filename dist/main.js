const renderNav = () => {
  const nav = document.querySelector("#nav");

  let template = `
        <div class="navbar__container">
            <div class="navbar__logo"><a href="index.html"><i class="fas fa-store"></i><span class="navbar__logo-title">Buyit</span></a></div>
            <ul class="nav__items">
                <li class="nav__links"><a href="apparel-products.html">Apparel</a></li>
                <li class="nav__links"><a href="lifestyle-products.html">Lifestyle</a></li>
                <li class="nav__links"><a href="cart.html"><i class="fas fa-shopping-cart"></i></a></li>
            </ul>
        </div>
`;
  nav.innerHTML = template;
};

const renderFooter = () => {
  const footer = document.querySelector("#footer");

  let template = `
                <div class="social__cta">
                <ul class="social__links">
                    <li><h3 class="social-cta__title">Follow us:</h3></li>
                    <li class="social__urls"><a href="http://" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook"></i></a></li>
                    <li class="social__urls"><a href="http://" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a></li>
                    <li class="social__urls"><a href="http://" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a></li>
                    <li class="social__urls"><a href="http://" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a></li>
                </ul>
                </div>
                <div class="footer__items">
                <div class="footer_tel">
                    <span>
                        <a href="tel:+"></a><i class="fas fa-phone"></i>
                        <h4>934-416-0042 x72306</h4></a>
                        <p>Monday - Friday: 8:00am - 8:00pm GTM</p>
                    </span>
                </div>
                <div class="footer__email">
                    <span>
                        <a href="mailto:"><i class="fas fa-envelope"></i>
                        <h4>Email Us</h4></a>
                        <p>We'll take it from there.</p>
                    </span>
                </div>
                <div class="footer__customer-support">
                    <h4>Customer Support</h4>
                    <ul>
                        <li><a href="http://" target="_blank" rel="noopener noreferrer">FAQ</a></li>
                        <li><a href="http://" target="_blank" rel="noopener noreferrer">Returns and Exchanges</a></li>
                        <li><a href="http://" target="_blank" rel="noopener noreferrer">Shipping</a></li>
                    </ul>
                </div>
                </div>
                <div class="footer__info">
                <ul class="footer__info-links">
                    <li><a href="http://" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                    <li><a href="http://" target="_blank" rel="noopener noreferrer">Terms of Use</a></li>
                </ul>
                <p>All Rights Reserved © 2021</p>
                </div>
                `;
  footer.innerHTML = template;
};

const renderNewProducts = (data) => {
  const newProducts = document.querySelector("#new-products");

  if (!!newProducts) {
    let template = "";
    data.forEach((element) => {
      template += `
        <div class="product__container">
            <div class="product__img"><i class="fas fa-${element.img}"></i></div>
            <div class="product__details">
                <h2 class="product__title">${element.title}</h2>
                <p class="product__price">${element.price} ₹</p>
            </div>
            <button class="product__btn">Add to Cart</button>
        </div>
        `;
    });

    newProducts.innerHTML = template;
  }
};

const renderApparelProducts = (data) => {
  const apparelProducts = document.querySelector("#apparel-products");

  if (!!apparelProducts) {
    let template = "";
    data.forEach((element) => {
      template += `
        <div class="product__container">
            <div class="product__img"><i class="fas fa-${element.img}"></i></div>
            <div class="product__details">
                <h2 class="product__title">${element.title}</h2>
                <p class="product__price">${element.price} ₹</p>
            </div>
            <button class="product__btn">Add to Cart</button>
        </div>
        `;
    });

    apparelProducts.innerHTML = template;
  }
};

const renderLifestyleProducts = (data) => {
  const lifestyleProducts = document.querySelector("#lifestyle-products");

  if (!!lifestyleProducts) {
    let template = "";
    data.forEach((element) => {
      template += `
        <div class="product__container">
            <div class="product__img"><i class="fas fa-${element.img}"></i></div>
            <div class="product__details">
                <h2 class="product__title">${element.title}</h2>
                <p class="product__price">${element.price} ₹</p>
            </div>
            <button class="product__btn">Add to Cart</button>
        </div>
        `;
    });

    lifestyleProducts.innerHTML = template;
  }
};

const renderCart = () => {
  const data = JSON.parse(localStorage.getItem('prodArray')) || [];
  const productCart = document.querySelector("#product-cart");

  if (data.length > 0) {
    
    let template = "";
    data.forEach((element) => {
      template += `
        <div class="cart__container">
            <div class="cart__details">
                <h2 class="cart__title">${element.title}</h2>
                <p class="cart__price">${element.price} ₹</p>
            </div>
        </div>
        `;
    });
    template += `
    <button class="checkout__btn">Checkout</button>
    `
    productCart.innerHTML = template;
  }
  checkout();
};

const getAddToCart = () => {
  const stationeryProducts = document.querySelectorAll(".product__btn");
  stationeryProducts.forEach(element => {
  element.addEventListener('click', addToCartClicked)
  });

}
const addToCartClicked = (e) => {
  const btn = e.target;
  const product = btn.parentElement;
  const productTitle = product.querySelector('.product__title').innerText;
  const productPrice = product.querySelector('.product__price').innerText;

  const products = {
        "title": productTitle,
        "price": productPrice
    }

    const localProdArray =JSON.parse(localStorage.getItem('prodArray'))||[];
    let prodArray = []
    prodArray = localProdArray 
    prodArray.push(products)
    localStorage.setItem("prodArray",JSON.stringify(prodArray));

}
const thankyou = () =>{
  localStorage.removeItem("prodArray");
  location.href="thank-you.html"
}
const checkout = () =>{
  const checkoutBtn = document.querySelector(".checkout__btn");
  if(!!checkoutBtn){
    checkoutBtn.addEventListener('click', thankyou)
  }

}

const render = async () => {
  const res = await fetch("db.json");
  const data = await res.json();
  renderNav();
  renderFooter();
  renderNewProducts(data.new);
  renderApparelProducts(data.apparel);
  renderLifestyleProducts(data.lifestyle);
  getAddToCart();
  renderCart();
};

window.addEventListener("DOMContentLoaded", () => render());
