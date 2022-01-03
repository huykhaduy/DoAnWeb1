
renderProduct(listProduct);
function renderProduct(list) {
    renderPage(list);
    const productContainer = document.querySelector(".product-container");
    if (list == null || list.length == 0) {
        productContainer.innerHTML = `
           <div class="product-not-found">
                <div class="not-found-txt">
                    Không tìm thấy sản phẩm !
                </div>
            </div>
        `;
        return;
    }
    
    //Get list data 
    list = data.getProductAtPage(list, currentPage, maxProductShow);
    var html = "";
    list.forEach(item => {
        html += `
            <div class="product-card" data-id="${item.productId}">
                <img src="${item.imgList[0]}" alt="Phone image" onerror="" class="product-card-img">
                <div class="product-content">
                    <div class="product-title">${item.name}</div>
                    <div class="product-price">${money.vnd(item.price)}</div>
                </div>
                <div class="card-add">
                    Thêm vào giỏ
                </div>
            </div>
        `;
    })
    productContainer.innerHTML = html;
    //Add event listener click for product card
    const clickOpenProductModal = document.querySelectorAll(".product-card");
    clickOpenProductModal.forEach(item => {
        let productid = parseInt(item.getAttribute("data-id"));
        item.addEventListener("click", function () {
            // let productid = parseInt(item.getAttribute("data-id"));
            openProductDetails(productid);
        })
        const addToCard = item.querySelector(".card-add");
        addToCard.addEventListener("click", function (e) {
            e.stopPropagation();
            // console.log("Oke");
            let userid = user.checkLoginId();
            if (userid) {
                cart.addItem(userid, productid, 1, null);
                openCartModalDetails();
            }
            else {
                showAlert(
                  "fas fa-exclamation-triangle",
                  "Thêm thất bại",
                  "Vui lòng đăng nhập hoặc đăng kí tài khoản",
                  "rgb(211, 109, 109)"
                );
            }
        })
    })
}

function renderPage(list) {
    let numberOfPages = data.getMaxPages(list, maxProductShow);
    // console.log(numberOfPages);
    const pageContainer = document.querySelector(".page-box.page-item-group");
    const pagePrev = document.querySelector(".page-previous");
    const pageNext = document.querySelector(".page-next");
    pagePrev.classList.remove('hide');
    pageNext.classList.remove('hide');
    if (currentPage == 1)
        pagePrev.classList.add('hide');
    if (currentPage == numberOfPages)
        pageNext.classList.add('hide');
    if (numberOfPages == 0) {
        pagePrev.classList.add("hide");
        pageNext.classList.add("hide");
        pageContainer.html = "";
        // return;
    }

    let html = '';
    let pageShow = 2;
    let leftSide = currentPage-pageShow;
    let rightSide = currentPage + pageShow;
    if (leftSide < 1) {
        rightSide += 1 - leftSide;
        leftSide = 1;
    }
    if (rightSide > numberOfPages) {
        leftSide -= rightSide - numberOfPages;
        leftSide = leftSide > 0 ? leftSide : 1;
        rightSide = numberOfPages;
    }
        
    for (let i = leftSide; i <= rightSide; i++) {
        if (i === currentPage) {
            html += `<div class="page-item active" data-page="${i}">${i}</div>`;
        }
        else html += `<div class="page-item" data-page="${i}">${i}</div>`;
    }

    if (numberOfPages == 1)
        html = "";
    pageContainer.innerHTML = html;

    const allPageItem = document.querySelectorAll(".page-item-group .page-item");-
    allPageItem.forEach(item => {
        item.addEventListener("click", function () {
            currentPage = parseInt(item.getAttribute("data-page"));
            // console.log(item.getAttribute("data-page"));
            renderProduct(list);
        })
    })
}

const previousPage = document.querySelector(".page-previous");
const nextPage = document.querySelector(".page-next");

previousPage.addEventListener("click", function () {
  if (currentPage > 1) {
    currentPage--;
    renderProduct(listProduct);
  }
});

nextPage.addEventListener("click", function () {
  if (currentPage < data.getMaxPages(listProduct, maxProductShow)) {
    currentPage++;
    renderProduct(listProduct);
  }
});



