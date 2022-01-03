let userid = user.checkLoginId();

if (!userid)
    redirectToHome();

let userData = user.getUserId(userid);

if (userData.address !== 'No Address' || userData.phone != '0123456789')
    document.querySelector("body > div.main > div.content > div.order-cofirm-box").classList.remove('active');
else 
    document.querySelector("body > div.main > div.content > div.order-cofirm-box").classList.add('active');

if (document.querySelector("body > div.main > div.footer").offsetTop < screen.availHeight) {
    document.querySelector("body > div.main > div.content").style.minHeight = screen.availHeight + "px";
}

let listOrder = order.getOrderOfUserId(userid);
if (listOrder.length>0 && Math.abs(listOrder[listOrder.length - 1].orderTime - Date.now()) <= 3000){
    showAlert(
          "fas fa-exclamation-triangle",
          "Đặt hàng thành công",
          "Đơn hàng #"+listOrder[listOrder.length - 1].orderId+" đã được thêm!",
    );
}

const addressInput = document.querySelector("#address");
const phoneInput = document.querySelector("#numberphone");

const confirmData = document.querySelector(".confirm-item.btn-confirm");
confirmData.addEventListener("click", function () {
    try {
        let userData = user.getUserId(user.checkLoginId());
        user.changeUserInfo(userData.userID, userData.username, userData.password, userData.email, phoneInput.value, userData.name,
            addressInput.value, userData.isAdmin, userData.isActive);
        location.reload();
    } catch (e) {
        showAlert(
          "fas fa-exclamation-triangle",
          "Thay đổi thất bại",
          e.toString(),
          "rgb(211, 109, 109)"
        );
    }
})

const cancel = document.querySelector(".confirm-item.btn-cancel");
cancel.addEventListener("click", function () {
    document.querySelector(".order-cofirm-box").classList.remove("active");
})

const backToHome = document.querySelector(".order-back");
backToHome.addEventListener("click", function () {
    redirectToHome();
})


renderOrderList();
function renderOrderList() {
    var html = '';
    const list = order.getOrderOfUserId(user.checkLoginId());
    list.forEach(myorder => {
        console.log(myorder);
        html += `
             <div class="order-item">
                <div class="order-show">
                    <div class="order-title-item order-name">
                        <div class="order-dropdown-icon">
                            <i class="fas fa-angle-down"></i>
                        </div>
                        <div class="order-item-icon">
                            <!-- <img src="" alt=""> -->
                            <i class="fas fa-shopping-cart"></i>
                        </div>
                        <div class="order-name-detail">
                            Đơn hàng #<span class="maDH">${myorder.orderId}</span>
                        </div>
                    </div>
                    <div class="order-title-item order-item-total">
                        ${money.vnd(order.getOrderIdMoney(myorder.orderId))}
                    </div>
                    <div class=" order-title-item order-item-date">
                        ${time.getDateTimeStr(myorder.orderTime)}
                    </div>
                    <div class="order-title-item order-item-status">
                        ${myorder.status === false ? "Chưa xử lý" : "Đã xử lý"}
                    </div>
                </div>
                <div class="order-body">`;
        
        myorder.cartList.forEach((item) => {
          html += `
                    <div class="order-body-item">
                        <div class="order-body-img">
                            <img src="${item.productImg}" alt="">
                        </div>
                        <div class="order-body-name">
                            ${item.storeProduct.name}
                        </div>
                        <div class="order-body-price">
                            ${money.vnd(item.product_price)}
                        </div>
                        <div class="order-body-amout">
                            Số lượng: ${item.soluong}
                        </div>
                        <div class="order-body-price">
                            Tổng: ${money.vnd(item.total)}
                        </div>
                    </div>
            `;
        });
        html += `</div>
        </div>`;
    })
 

    const container = document.querySelector(".order-list-container");
    container.innerHTML = html;



    const allOrderItem = document.querySelectorAll(".order-item");
    allOrderItem.forEach((item) => {
        item.addEventListener("click", function () {
            let content = item.querySelector(".order-body");
            content.classList.toggle("active");
            console.log("togle");
            if (content.style.maxHeight) content.style.maxHeight = null;
            else content.style.maxHeight = content.scrollHeight + "px";
        });
    });

}