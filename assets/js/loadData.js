
if (data.getProducts() === null) {
    data.loadProducts(productArr);
}

if (order.getOrders() === null) {
    order.loadOrder([]);
}

if (user.checkLoginId() == null) {
    user.setLoginState();
}

var currentPage = 1;
var maxProductShow = 10;
var listProduct = data.getProducts();



//Modal Alert
var timeOut;
function showAlert(icon,title,mess,color) {
    const alert = document.querySelector(".modal-sweet-alert");
    alert.classList.remove("active");
    setTimeout(() => {
        clearTimeout(timeOut);
        if (color !== null) {
            alert.style.backgroundColor = color;
        } else {
            alert.style.backgroundColor = "#50cf94";
        }
        const alert_title = alert.querySelector(".alert-title");
        alert_title.innerText = title;
        const alert_mess = alert.querySelector(".alert-description");
        alert_mess.innerText = mess;
        const alert_icon = alert.querySelector(".left-alert-icon");
        alert_icon.innerHTML = `<i class="${icon}"></i>`;
        alert.classList.add("active");
        timeOut = setTimeout(() => {
          alert.classList.remove("active");
        }, 4000);
    },100)
}

const alert_close = document.querySelector(".alert-close");
alert_close.addEventListener("click", () => {
    clearTimeout(timeOut);
    const alert = document.querySelector(".modal-sweet-alert");
    alert.classList.remove("active");
})
//Modal alert


function redirectToHome() {
    location.href = './index.html';
}

function redirectToIntroduce() {
    location.href = './introducePage.html';
}

function redirectToContact() {
    location.href = './contact.html';
}

function redirectToOrderPage() {
    location.href = './orderPage.html';
}