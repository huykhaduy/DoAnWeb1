const openUserMenu = document.querySelector(".user-panel");
const menuUserList = document.querySelector(".user-dropdown-group");
const openSortMenu = document.querySelector(".content-right-sort");
const menuSortList = document.querySelector(".content-sort-dropdown");

window.addEventListener("click", closeAllMenu)

function closeAllMenu() {
    menuUserList.classList.remove("active");
    if (menuSortList)
        menuSortList.classList.remove("active");
}

openUserMenu.addEventListener("click", function (e) {
    menuUserList.classList.toggle("active");
    e.stopPropagation();
})

menuUserList.addEventListener("click", function (e) {
    this.classList.remove("active");
    e.stopPropagation();
})

 if (menuSortList)
   openSortMenu.addEventListener("click", function (e) {
     menuSortList.classList.toggle("active");
     e.stopPropagation();
   });

menuUserList.addEventListener("click", function (e) {
    this.classList.remove("active");
    e.stopPropagation();
})


const changeMaxPageShow = document.querySelector(".max-show-dropdown");
if (menuSortList)
   changeMaxPageShow.addEventListener("change", function () {
     maxProductShow = parseInt(changeMaxPageShow.value);
     currentPage = 1;
     renderProduct(listProduct);
     // console.log(listProduct);
   });

function sort(isIncrease) {
    currentPage = 1;
    data.sortProducts(listProduct, isIncrease);
    renderProduct(listProduct);
}


