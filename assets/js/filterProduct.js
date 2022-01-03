const inputSearchKeyWord = document.querySelector("#search-input");
const searchKeyWordBtn = document.querySelector(".search-btn");
const listBrand = document.querySelectorAll(".brand-item");
const listRam = document.querySelectorAll(".ram-item");
const listRom = document.querySelectorAll(".rom-item");
const inputMinPrice = document.querySelector("#price-min-input");
const inputMaxPrice = document.querySelector("#price-max-input");

let myChoiceBrand = [];
let myChoiceRam = [];
let myChoiceRom = [];
let myChoicePrice = [0, data.getMaxProductPrice()];

searchKeyWordBtn.addEventListener("click", function () {
    searchAndRender();
})

inputMinPrice.addEventListener("keyup", function () {
    myChoicePrice[0] = parseInt(inputMinPrice.value);
    if (myChoicePrice[0] < myChoicePrice[1]) {
        searchAndRender();
    }
})

inputMaxPrice.addEventListener("keyup", function () {
    myChoicePrice[1] = parseInt(inputMaxPrice.value);
    if (myChoicePrice[0] < myChoicePrice[1]) {
        searchAndRender();
    }
})


addListener(listBrand,myChoiceBrand);
addListener(listRom,myChoiceRom);
addListener(listRam,myChoiceRam);

function addListener(list,mychoice) {
    list.forEach(btn => {
        btn.addEventListener("click", function () {
            effectBtnClick(btn, mychoice);
            searchAndRender();
        });
    })
}

function searchAndRender() {
    listProduct = menu.filterProudct(
        data.getProducts(),
        myChoiceBrand,
        myChoicePrice[0],
        myChoicePrice[1],
        myChoiceRam,
        myChoiceRom,
        inputSearchKeyWord.value
    );
    currentPage = 1;
    // console.log(listProduct);
    renderProduct(listProduct);
}


function effectBtnClick(item, myData) { 
    item.classList.toggle("active");
    let itemValue = item.getAttribute("value");
    let myValue;
    if (isNumeric(itemValue)) {
        myValue = parseInt(itemValue);
    }
    else {
        myValue = itemValue;
    }
    if (item.classList.contains("active")) {
        var isExist = false;
        for (let i = 0; i < myData.length; i++) {
            if (myData[i] === myValue) {
                isExist = true;
                break;
            }
        }
        if (!isExist) {
            myData.push(myValue);
        }
    } else {
        for (let i = 0; i < myData.length; i++) {
            if (myData[i] === myValue) {
                myData.splice(i, 1);
            }
        }
    }
}

resetAll();
function resetAll() {
    const reset = document.querySelector(".reset-all");
    reset.addEventListener("click", function () {
        location.reload();
    })
}


function isNumeric(num) {
    return !isNaN(num);
}

