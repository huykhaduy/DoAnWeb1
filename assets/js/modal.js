const modal_bg = document.querySelector(".modal-bg");
const modal_product_detail = document.querySelector(".modal-view-product");
const modal_product_close = document.querySelector(".modal-product-close");

const modal_account_detail = document.querySelector(".modal-account");
const modal_account_close = document.querySelector(".top-modal-account .close-btn");

const modal_cart = document.querySelector(".modal-cart");
const modal_cart_close = document.querySelector(".modal-cart-close");


modal_bg.addEventListener("click", function () {
    closeproductDetails();
    closeAccountModal();
    closeCartModal();
});

modal_product_close.addEventListener("click", function () {
    closeproductDetails();
});

modal_account_close.addEventListener("click", function () {
    closeAccountModal();
})

modal_cart_close.addEventListener("click", function () {
    closeCartModal();
})

//Stop progation for modal
modal_product_detail.addEventListener("click", function (e) {
    e.stopPropagation();
});

modal_account_detail.addEventListener("click", function (e) {
    e.stopPropagation();
})
modal_cart.addEventListener("click", function (e) {
    e.stopPropagation();
})


//Add event listener click for login btn and signup btn
const nav_login_btn = document.querySelector("#nav-login-btn");
const nav_signup_btn = document.querySelector("#nav-signup-btn");
nav_login_btn.addEventListener("click", function () {
    openAccountModal();
    showLoginModal();
})

nav_signup_btn.addEventListener("click", function () {
    openAccountModal();
    showSignUpModal();
})

const clickToOpenCart = document.querySelector(".show-cart-btn");
clickToOpenCart.addEventListener("click", function () {
    openCartModalDetails();
})



//OPEN AND CLOSE PRODUCT MODAL
function openProductDetails(productId) {
    showBg();
    //nạp dữ liệu vào

    const product = data.getProductId(productId);
    if (!product) return;
    const name = document.querySelector(".modal-product-title");
    const ram = document.querySelector("#modal-product-ram");
    const rom = document.querySelector("#modal-product-rom");
    const price = document.querySelector("#modal-product-price");
    const img = document.querySelector(".modal-product-left img");

    name.innerText = product.name;
    ram.innerText = product.ram;
    rom.innerText = product.rom;
    price.innerText = money.vnd(product.price);
    img.setAttribute("src", product.imgList[0]);
    const amout = document.querySelector(".product-amout-show");
    amout.innerText = "1";
    const buyNowBtn = document.querySelector(".buy-now-btn");
    const addToCartBtn = document.querySelector(".add-to-card");
    buyNowBtn.setAttribute("onclick", "buyNowFunction(" + productId + ")");
    addToCartBtn.setAttribute("onclick", "addToCartFunction(" + productId + ")");


    modal_product_detail.classList.add("active");
}

function buyNowFunction(productid) {
    const userid = user.checkLoginId();
    const amout = document.querySelector(".product-amout-show");
    if (userid) {
        console.log(order.addBuyNowOrder(productid, parseInt(amout.innerText), null, userid, Date.now()));
        closeproductDetails();
        redirectToOrderPage();
    }
    else {
        showAlert(
          "fas fa-exclamation-triangle",
          "Mua thất bại",
          "Vui lòng đăng nhập hoặc đăng kí tài khoản !",
          "rgb(211, 109, 109)"
        );
    }
}

function addToCartFunction(productid) {
    const userid = user.checkLoginId();
    const amout = document.querySelector(".product-amout-show");
    if (userid) {
        cart.addItem(userid, productid, parseInt(amout.innerText), null);
        closeproductDetails();
        openCartModalDetails();
    }
    else {
        showAlert(
          "fas fa-exclamation-triangle",
          "Thêm thất bại",
          "Vui lòng đăng nhập hoặc đăng kí tài khoản !",
          "rgb(211, 109, 109)"
        );
    }
}

addEventToDetailModal();
function addEventToDetailModal() {
    const addBtn = document.querySelector(".btn-add-amout");
    const subBtn = document.querySelector(".btn-subtract-amout");
    const amout = document.querySelector(".product-amout-show");
    
    subBtn.addEventListener("click", function () {
        let number = parseInt(amout.innerText);
        if (number > 1) {
            number--;
            amout.innerText = number;
        }
    })
    addBtn.addEventListener("click", function () {
        let number = parseInt(amout.innerText);
        number++;
        amout.innerText = number;
    });
}





function openCartModalDetails() {
    openCartModal();
    renderCart();
}

function renderCart() {
    const userid = user.checkLoginId();
    const userCart = cart.getCartList(userid);
    const cartContainer = document.querySelector(".modal-cart-container");
    var html = "";
    userCart.forEach((cartItem) => {
      html += `
            <div class="modal-cart-item" value="${cartItem.cartId}">
                <div class="modal-cart-item-head">
                    <div class="modal-cart-item-remove">
                        <i class="fas fa-times"></i>
                    </div>
                </div>
                <div class="modal-cart-item-body">
                    <div class="modal-cart-left">
                        <img class="modal-cart-item-img" src="${
                          cartItem.productImg
                        }" alt="">
                    </div>
                    <div class="modal-cart-right">
                        <div class="modal-cart-item-title">
                            ${cartItem.storeProduct.name}
                        </div>
                        <div class="modal-cart-item-counter">
                            <div class="modal-cart-item-action modal-cart-item-subtract"><i class="fas fa-angle-left"></i></div>
                            <div class="modal-cart-item-action modal-cart-item-number">${
                              cartItem.soluong
                            }</div>
                            <div class="modal-cart-item-action modal-cart-item-add"><i class="fas fa-angle-right"></i></div>
                        </div>
                        <div class="modal-cart-price">
                            ${money.vnd(cartItem.total)}
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    cartContainer.innerHTML = html;
    const totalMoney = document.querySelector(".total-money-number");
    totalMoney.innerText = money.vnd(cart.getTotalMoney(userid));
    //Add event for increase and decrease buttons
    const listCartItem = document.querySelectorAll(".modal-cart-item");
    listCartItem.forEach((cartItem) => {
        const cartId = parseInt(cartItem.getAttribute("value"));
        const btnDown = cartItem.querySelector(".modal-cart-item-subtract");
        const btnUp = cartItem.querySelector(".modal-cart-item-add");
        const cartIdAmout = cartItem.querySelector(".modal-cart-item-number");
        const cartIdMoney = cartItem.querySelector(".modal-cart-price");
        const cartIdRemove = cartItem.querySelector(".modal-cart-item-remove");
        // const myCart = cart.getCardId(userid, cartId);
        btnDown.addEventListener("click", function () {
            const myCart = cart.getCardId(userid, cartId);
            if (myCart.soluong > 1) {
                cart.changeAmout(userid, cartId, myCart.soluong - 1);
                renderCart();
            }   
        });
        btnUp.addEventListener("click", function () {
            const myCart = cart.getCardId(userid, cartId);
            cart.changeAmout(userid, cartId, myCart.soluong + 1);
            renderCart();
        });
        cartIdRemove.addEventListener("click", function () {
            cart.removeItem(userid, cartId);
            renderCart();
        })
    });

    const buyNow = document.querySelector(".modal-cart-payment");
    buyNow.addEventListener("click", function () {
        order.makeOrder(cart.getCartList(user.checkLoginId()), user.checkLoginId(), Date.now());
        cart.removeAllItem(user.checkLoginId());
        redirectToOrderPage();
    })
    const viewOrder = document.querySelector(".modal-cart-view-order");
    viewOrder.addEventListener("click", function () {
        redirectToOrderPage();
    })
}


function closeproductDetails() {
    hideBg();
    modal_product_detail.classList.remove("active");
}


//OPEN AND CLOSE ACCOUNT MODAL
function openAccountModal() {
    showBg();
    modal_account_detail.classList.add("active");
}

function closeAccountModal() {
    hideBg();
    modal_account_detail.classList.remove("active");
}

//OPEN AND CLOSE CART MODAL
function openCartModal() {
    showBg();
    modal_cart.classList.add("active");
}

function closeCartModal() {
    hideBg();
    modal_cart.classList.remove("active");
}

//SHOW AND HIDE BG MODAL
function showBg() {
    modal_bg.classList.add("active");
}

function hideBg() {
    modal_bg.classList.remove("active");
}
