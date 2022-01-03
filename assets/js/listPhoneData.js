//List product arr lấy từ tgdd
//Code crawl
// let string = "const productArr = [ ";
// let a = document.querySelectorAll(".item.ajaxed.__cate_42");
// a.forEach((item) => {
//   const b = item.querySelector("a");
//   string += `new Product("${b.getAttribute("data-name")}",0,${b.getAttribute(
//     "data-price"
//   )},['nodata','nodata','nodata'],["${b
//     .querySelector(".item-img.item-img_42 img")
//     .getAttribute("data-src")}"],"${b.getAttribute("data-brand")}"),`;
// });
// string += "]";

const productArr = [
  new Product(
    "Điện thoại Samsung Galaxy Z Fold3 5G 256GB",
    0,
    41990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold-3-silver-1-600x600.jpg",
    ],
    "Samsung"
  ),
  new Product(
    "Điện thoại iPhone 11 64GB",
    0,
    15990000.0,
    ["nodata", "nodata", "nodata"],
    ["https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-do-600x600.jpg"],
    "iPhone (Apple)"
  ),
  new Product(
    "Điện thoại Xiaomi 11T 5G 128GB",
    0,
    10590000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/248293/xiaomi-11t-white-1-2-600x600.jpg",
    ],
    "Xiaomi"
  ),
  new Product(
    "Điện thoại Samsung Galaxy A32",
    0,
    6090000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/234315/samsung-galaxy-a32-4g-thumb-xanh-600x600-600x600.jpg",
    ],
    "Samsung"
  ),
  new Product(
    "Điện thoại OPPO Reno6 Z 5G",
    0,
    9490000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/239747/oppo-reno6-z-5g-aurora-1-600x600.jpg",
    ],
    "OPPO"
  ),
  new Product(
    "Điện thoại iPhone 13 Pro Max 256GB",
    0,
    34990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/250261/iphone-13-pro-max-gold-1-600x600.jpg",
    ],
    "iPhone (Apple)"
  ),
  new Product(
    "Điện thoại Realme C21Y 4GB",
    0,
    4090000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/241265/realme-c21y-black-600x600.jpg",
    ],
    "Realme"
  ),
  new Product(
    "Điện thoại OPPO A95",
    0,
    6990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/251703/oppo-a95-4g-bac-2-600x600.jpg",
    ],
    "OPPO"
  ),
  new Product(
    "Điện thoại Samsung Galaxy A52 128GB",
    0,
    8290000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/228967/samsung-galaxy-a52-8gb-256gb-thumb-violet-600x600-600x600.jpg",
    ],
    "Samsung"
  ),
  new Product(
    "Điện thoại iPhone 13 Pro Max 1TB",
    0,
    47990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/250728/iphone-13-pro-max-gold-1-600x600.jpg",
    ],
    "iPhone (Apple)"
  ),
  new Product(
    "Điện thoại Samsung Galaxy Z Fold3 5G 512GB",
    0,
    44990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/248284/samsung-galaxy-z-fold-3-green-1-600x600.jpg",
    ],
    "Samsung"
  ),
  new Product(
    "Điện thoại iPhone 13 Pro 1TB",
    0,
    42990000,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/250726/iphone-13-pro-silver-600x600.jpg",
    ],
    "iPhone (Apple)"
  ),
  new Product(
    "Điện thoại iPhone 13 Pro Max 512GB",
    0,
    41990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/250262/iphone-13-pro-max-graphite-600x600.jpg",
    ],
    "iPhone (Apple)"
  ),
  new Product(
    "Điện thoại iPhone 13 Pro 512GB",
    0,
    38990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/250260/iphone-13-pro-graphite-600x600.jpg",
    ],
    "iPhone (Apple)"
  ),
  new Product(
    "Điện thoại iPhone 12 Pro Max 512GB",
    0,
    36990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/228744/iphone-12-pro-max-vang-new-600x600-600x600.jpg",
    ],
    "iPhone (Apple)"
  ),
  new Product(
    "Điện thoại Samsung Galaxy Z Fold2 5G",
    0,
    35000000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/226099/samsung-galaxy-z-fold-2-den-600x600.jpg",
    ],
    "Samsung"
  ),
  new Product(
    "Điện thoại iPhone 13 Pro 256GB",
    0,
    34490000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/250259/iphone-13-pro-gold-1-600x600.jpg",
    ],
    "iPhone (Apple)"
  ),
  new Product(
    "Điện thoại iPhone 12 Pro 512GB",
    0,
    32990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/228739/iphone-12-pro-silver-600x600.jpg",
    ],
    "iPhone (Apple)"
  ),
  new Product(
    "Điện thoại iPhone 13 Pro Max 128GB",
    0,
    32990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-silver-600x600.jpg",
    ],
    "iPhone (Apple)"
  ),
  new Product(
    "Điện thoại iPhone 12 Pro Max 256GB",
    0,
    31990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/228743/iphone-12-pro-max-vang-new-600x600-1-600x600.jpg",
    ],
    "iPhone (Apple)"
  ),
  new Product(
    "Điện thoại iPhone 13 512GB",
    0,
    31990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/250257/iphone-13-pink-1-600x600.jpg",
    ],
    "iPhone (Apple)"
  ),
  new Product(
    "Điện thoại iPhone 12 Pro Max 128GB",
    0,
    29990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/213033/iphone-12-pro-max-trang-bac-600x600-600x600.jpg",
    ],
    "iPhone (Apple)"
  ),
  new Product(
    "Điện thoại iPhone 13 Pro 128GB",
    0,
    29990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-sierra-blue-600x600.jpg",
    ],
    "iPhone (Apple)"
  ),
  new Product(
    "Điện thoại iPhone 12 Pro 256GB",
    0,
    27990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/228738/iphone-12-pro-xam-new-600x600-600x600.jpg",
    ],
    "iPhone (Apple)"
  ),
  new Product(
    "Điện thoại iPhone 13 256GB",
    0,
    27990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/250258/iphone-13-starlight-1-600x600.jpg",
    ],
    "iPhone (Apple)"
  ),
  new Product(
    "Điện thoại Samsung Galaxy Z Flip3 5G 256GB",
    0,
    26990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/248283/samsung-galaxy-z-flip-3-violet-1-600x600.jpg",
    ],
    "Samsung"
  ),
  new Product(
    "Điện thoại iPhone 13 mini 512GB",
    0,
    26990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/250255/iphone-13-mini-midnight-1-600x600.jpg",
    ],
    "iPhone (Apple)"
  ),
  new Product(
    "Điện thoại iPhone 12 Pro 128GB",
    0,
    25990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/213032/iphone-12-pro-vang-dong-new-600x600-1-600x600.jpg",
    ],
    "iPhone (Apple)"
  ),
  new Product(
    "Điện thoại Samsung Galaxy Z Flip3 5G 128GB",
    0,
    24990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/229949/samsung-galaxy-z-flip-3-cream-1-600x600.jpg",
    ],
    "Samsung"
  ),
  new Product(
    "Điện thoại iPhone 13 128GB",
    0,
    24490000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-midnight-2-600x600.jpg",
    ],
    "iPhone (Apple)"
  ),
  new Product(
    "Điện thoại iPhone 12 256GB",
    0,
    23490000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/228737/iphone-12-white-600x600.jpg",
    ],
    "iPhone (Apple)"
  ),
  new Product(
    "Điện thoại iPhone 12 128GB",
    0,
    22490000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/228736/iphone-12-violet-1-600x600.jpg",
    ],
    "iPhone (Apple)"
  ),
  new Product(
    "Điện thoại iPhone 13 mini 256GB",
    0,
    21990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/250256/iphone-13-mini-red-1-600x600.jpg",
    ],
    "iPhone (Apple)"
  ),
  new Product(
    "Điện thoại Xiaomi Mi 11 5G",
    0,
    21990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/226264/xiaomi-mi-11-xanhduong-600x600-600x600.jpg",
    ],
    "Xiaomi"
  ),
  new Product(
    "Điện thoại Samsung Galaxy S21 Ultra 5G 128GB",
    0,
    21990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/226316/samsung-galaxy-s21-ultra-bac-600x600-1-600x600.jpg",
    ],
    "Samsung"
  ),
  new Product(
    "Điện thoại iPhone 11 256GB",
    0,
    20490000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/210648/iphone-11-tim-thumb-600x600.jpeg",
    ],
    "iPhone (Apple)"
  ),
  new Product(
    "Điện thoại iPhone 12 mini 256GB",
    0,
    19990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/228742/iphone-23-mini-den-new-600x600-600x600.jpg",
    ],
    "iPhone (Apple)"
  ),
  new Product(
    "Điện thoại OPPO Find X3 Pro 5G",
    0,
    19490000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/232190/oppo-find-x3-pro-black-001-1-600x600.jpg",
    ],
    "OPPO"
  ),
  new Product(
    "Điện thoại iPhone 12 mini 128GB",
    0,
    18990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/228741/iphone-12-mini-tim-1-600x600.jpg",
    ],
    "iPhone (Apple)"
  ),
  new Product(
    "Điện thoại iPhone 12 64GB",
    0,
    18990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-trang-13-600x600.jpg",
    ],
    "iPhone (Apple)"
  ),
  new Product(
    "Điện thoại OPPO Reno6 Pro 5G",
    0,
    18490000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/236187/oppo-reno6-pro-blue-1-600x600.jpg",
    ],
    "OPPO"
  ),
  new Product(
    "Điện thoại iPhone 13 mini 128GB",
    0,
    18490000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/236780/iphone-13-mini-blue-2-600x600.jpg",
    ],
    "iPhone (Apple)"
  ),
  new Product(
    "Điện thoại Samsung Galaxy S21+ 5G 128GB",
    0,
    16990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/226385/samsung-galaxy-s21-plus-den-600x600-600x600.jpg",
    ],
    "Samsung"
  ),
  new Product(
    "Điện thoại iPhone 11 128GB",
    0,
    16990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/210644/iphone-11-xanhla-600x600.jpg",
    ],
    "iPhone (Apple)"
  ),
  new Product(
    "Điện thoại Samsung Galaxy Note 20",
    0,
    15990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/218355/samsung-galaxy-note-20-062220-122200-fix-600x600.jpg",
    ],
    "Samsung"
  ),
  new Product(
    "Điện thoại iPhone SE 256GB (2020)",
    0,
    15490000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/222631/iphone-se-128gb-2020-trang-600x600.jpg",
    ],
    "iPhone (Apple)"
  ),
  new Product(
    "Điện thoại iPhone XR 128GB",
    0,
    15490000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/191483/iphone-xr-128gb-600x600.jpg",
    ],
    "iPhone (Apple)"
  ),
  new Product(
    "Điện thoại iPhone 12 mini 64GB",
    0,
    15490000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/225380/iphone-12-mini-mau-tim-3-600x600.jpg",
    ],
    "iPhone (Apple)"
  ),
  new Product(
    "Điện thoại Xiaomi 11T Pro 5G 12GB",
    0,
    14990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/248218/xiaomi-11t-pro-blue-1-600x600.jpg",
    ],
    "Xiaomi"
  ),
  new Product(
    "Điện thoại iPhone XR 64GB",
    0,
    14490000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/190325/iphone-xr-hopmoi-den-600x600-2-600x600.jpg",
    ],
    "iPhone (Apple)"
  ),
  new Product(
    "Điện thoại Xiaomi 11T Pro 5G 8GB",
    0,
    13990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/262566/xiaomi-11t-pro-5g-8gb-thumb-600x600.jpeg",
    ],
    "Xiaomi"
  ),
  new Product(
    "Điện thoại Samsung Galaxy S21 5G",
    0,
    13990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600.jpg",
    ],
    "Samsung"
  ),
  new Product(
    "Điện thoại iPhone SE 128GB (2020) (Hộp mới)",
    0,
    13490000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/230412/iphone-se-2020-trang-600x600-600x600.jpg",
    ],
    "iPhone (Apple)"
  ),
  new Product(
    "Điện thoại Samsung Galaxy S20 FE (8GB/256GB)",
    0,
    13490000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/224859/samsung-galaxy-s20-fan-edition-090320-040338-600x600.jpg",
    ],
    "Samsung"
  ),
  new Product(
    "Điện thoại OPPO Reno6 5G",
    0,
    12990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/236186/oppo-reno6-5g-aurora-600x600.jpg",
    ],
    "OPPO"
  ),
  new Product(
    "Điện thoại Xiaomi Mi 10T Pro 5G",
    0,
    12990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/228136/xiaomi-mi-10t-pro-den-600x600.jpg",
    ],
    "Xiaomi"
  ),
  new Product(
    "Điện thoại iPhone SE 128GB (2020)",
    0,
    12990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/222629/iphone-se-128gb-2020-do-600x600.jpg",
    ],
    "iPhone (Apple)"
  ),
  new Product(
    "Điện thoại Samsung Galaxy A72",
    0,
    11490000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/226101/samsung-galaxy-a72-thumb-balck-600x600-600x600.jpg",
    ],
    "Samsung"
  ),
  new Product(
    "Điện thoại Xiaomi 11T 5G 256GB",
    0,
    11490000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/251216/xiaomi-11t-grey-1-600x600.jpg",
    ],
    "Xiaomi"
  ),
  new Product(
    "Điện thoại iPhone SE 64GB (2020) (Hộp mới)",
    0,
    11490000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/230410/iphone-se-2020-trang-600x600-600x600.jpg",
    ],
    "iPhone (Apple)"
  ),
  new Product(
    "Điện thoại OPPO Reno5 5G",
    0,
    11390000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/233460/oppo-reno5-5g-thumb-600x600.jpg",
    ],
    "OPPO"
  ),
  new Product(
    "Điện thoại Samsung Galaxy A52 5G",
    0,
    10990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/235440/samsung-galaxy-a52-5g-thumb-black-600x600-600x600.jpg",
    ],
    "Samsung"
  ),
  new Product(
    "Điện thoại OPPO Reno4 Pro",
    0,
    9960000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/223497/oppo-reno4-pro-trang-600x600.jpg",
    ],
    "OPPO"
  ),
  new Product(
    "Điện thoại Samsung Galaxy A52s 5G 128GB",
    0,
    9890000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/247507/samsung-galaxy-a52s-5g-mint-600x600.jpg",
    ],
    "Samsung"
  ),
  new Product(
    "Điện thoại Samsung Galaxy M51",
    0,
    9490000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/217536/samsung-galaxy-m51-trang-new-600x600-600x600.jpg",
    ],
    "Samsung"
  ),
  new Product(
    "Điện thoại Xiaomi 11 Lite 5G NE Trắng Swarovski",
    0,
    9490000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/256053/xiaomi-11-lite-5g-ne-trang-swarovski-1-660x600.jpg",
    ],
    "Xiaomi"
  ),
  new Product(
    "Điện thoại Xiaomi 11 Lite 5G NE",
    0,
    9490000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/249427/xiaomi-11-lite-5g-ne-pink-600x600.jpg",
    ],
    "Xiaomi"
  ),
  new Product(
    "Điện thoại Samsung Galaxy A52 256GB",
    0,
    9290000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/236085/samsung-galaxy-a52-8gb-256gb-thumb-white-600x600-600x600.jpg",
    ],
    "Samsung"
  ),
  new Product(
    "Điện thoại OPPO Reno5 Marvel",
    0,
    9200000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/236024/oppo-reno5-marvel-thumb-600x600-600x600.jpg",
    ],
    "OPPO"
  ),
  new Product(
    "Điện thoại Realme 7 Pro",
    0,
    8790000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/227689/realme-7-pro-bac-600x600.jpg",
    ],
    "Realme"
  ),
  new Product(
    "Điện thoại Realme 8 Pro Vàng Rực Rỡ",
    0,
    8690000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/241017/realme-8-pro-vang-600x600.jpg",
    ],
    "Realme"
  ),
  new Product(
    "Điện thoại Realme 8 Pro",
    0,
    8690000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/235986/realme-8-pro-balck-600x600.jpg",
    ],
    "Realme"
  ),
  new Product(
    "Điện thoại Realme 8 5G",
    0,
    7990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/236588/realme-8-5g-blue-1-600x600.jpg",
    ],
    "Realme"
  ),
  new Product(
    "Điện thoại Xiaomi Mi 11 Lite",
    0,
    7990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/233241/xiaomi-mi-11-lite-4g-blue-600x600.jpg",
    ],
    "Xiaomi"
  ),
  new Product(
    "Điện thoại OPPO A74 5G",
    0,
    7590000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/236559/oppo-a74-5g-silver-01-600x600.jpg",
    ],
    "OPPO"
  ),
  new Product(
    "Điện thoại Samsung Galaxy A51 (6GB/128GB)",
    0,
    7490000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/211570/samsung-galaxy-a51-silver-600x600.jpg",
    ],
    "Samsung"
  ),
  new Product(
    "Điện thoại Xiaomi Redmi Note 10 Pro (8GB/128GB)",
    0,
    7490000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/229228/xiaomi-redmi-note-10-pro-thumb-xanh-600x600-1-600x600.jpg",
    ],
    "Xiaomi"
  ),
  new Product(
    "Điện thoại OPPO A94",
    0,
    7300000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/234316/oppo-a94-black-thumb-600x600-1-600x600.jpg",
    ],
    "OPPO"
  ),
  new Product(
    "Điện thoại Realme 8",
    0,
    7290000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/233135/realme-8-silver-600x600.jpg",
    ],
    "Realme"
  ),
  new Product(
    "Điện thoại Realme 7",
    0,
    6990000.0,
    ["nodata", "nodata", "nodata"],
    ["https://cdn.tgdd.vn/Products/Images/42/227731/realme-7-blue-600x600.jpg"],
    "Realme"
  ),
  new Product(
    "Điện thoại Xiaomi Redmi Note 10S 8GB",
    0,
    6490000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/235969/xiaomi-redmi-note-10s-xanh-1-600x600.jpg",
    ],
    "Xiaomi"
  ),
  new Product(
    "Điện thoại OPPO A74",
    0,
    6350000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/235653/oppo-a74-blue-9-600x600.jpg",
    ],
    "OPPO"
  ),
  new Product(
    "Điện thoại Realme 7i",
    0,
    6290000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/227688/realme-7i-xanhduong-new-600x600.jpg",
    ],
    "Realme"
  ),
  new Product(
    "Điện thoại OPPO A93",
    0,
    6160000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-den-14-600x600.jpg",
    ],
    "OPPO"
  ),
  new Product(
    "Điện thoại Realme 6 (4GB/128GB)",
    0,
    5990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/214644/realme-6-trang-600x600.jpg",
    ],
    "Realme"
  ),
  new Product(
    "Điện thoại Xiaomi Redmi Note 10S 6GB",
    0,
    5990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/262534/xiaomi-redmi-note-10s-6gb-thumb-600x600.jpeg",
    ],
    "Xiaomi"
  ),
  new Product(
    "Điện thoại Samsung Galaxy A31",
    0,
    5790000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/216174/samsung-galaxy-a31-trang-new-600x600-600x600.jpg",
    ],
    "Samsung"
  ),
  new Product(
    "Điện thoại Samsung Galaxy A22",
    0,
    5290000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/237603/samsung-galaxy-a22-4g-mint-1-600x600.jpg",
    ],
    "Samsung"
  ),
  new Product(
    "Điện thoại Realme C25Y 128GB",
    0,
    4990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/250615/realme-c25y-blue-600x600.jpg",
    ],
    "Realme"
  ),
  new Product(
    "Điện thoại OPPO A55",
    0,
    4990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/249944/oppo-a55-4g-blue-600x600.jpg",
    ],
    "OPPO"
  ),
  new Product(
    "Điện thoại Realme C25s",
    0,
    4990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/238483/realme-c25s-grey-7-600x600.jpg",
    ],
    "Realme"
  ),
  new Product(
    "Điện thoại Realme 6i",
    0,
    4990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/218360/realme-6i-trang-new-600x600-600x600.jpg",
    ],
    "Realme"
  ),
  new Product(
    "Điện thoại Xiaomi Redmi 10 (6GB/128GB)",
    0,
    4690000.0,
    ["nodata", "nodata", "nodata"],
    ["https://cdn.tgdd.vn/Products/Images/42/246200/redmi-10-gray-600x600.jpg"],
    "Xiaomi"
  ),
  new Product(
    "Điện thoại Realme C25",
    0,
    4690000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/235996/realme-c25-black-600x600-600x600.jpg",
    ],
    "Realme"
  ),
  new Product(
    "Điện thoại Realme C25Y 64GB",
    0,
    4690000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/265313/realme-c25y-64gb-xanh-thumb-600x600.jpeg",
    ],
    "Realme"
  ),
  new Product(
    "Điện thoại OPPO A54",
    0,
    4690000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/236768/oppo-a54-4g-black-600x600.jpg",
    ],
    "OPPO"
  ),
  new Product(
    "Điện thoại OPPO A15s",
    0,
    4290000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/229948/oppo-a15s-xanh-600x600-3-600x600.jpg",
    ],
    "OPPO"
  ),
  new Product(
    "Điện thoại Xiaomi Redmi 10 (4GB/128GB)",
    0,
    4290000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/249081/redmi-10-white-600x600.jpg",
    ],
    "Xiaomi"
  ),
  new Product(
    "Điện thoại Samsung Galaxy A12 6GB (2021)",
    0,
    4190000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/251888/samsung-galaxy-a12-2021-black-600x600.jpg",
    ],
    "Samsung"
  ),
  new Product(
    "Điện thoại Samsung Galaxy A12 6GB",
    0,
    4190000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/232364/samsung-galaxy-a12-trang-600x600.jpg",
    ],
    "Samsung"
  ),
  new Product(
    "Điện thoại Realme C21-Y 4GB",
    0,
    4090000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/253402/realme-c21-y-blue-600x600.jpg",
    ],
    "Realme"
  ),
  new Product(
    "Điện thoại Xiaomi Redmi 10 (4GB/64GB)",
    0,
    3990000.0,
    ["nodata", "nodata", "nodata"],
    ["https://cdn.tgdd.vn/Products/Images/42/249080/redmi-10-blue-600x600.jpg"],
    "Xiaomi"
  ),
  new Product(
    "Điện thoại Samsung Galaxy A12 4GB (2021)",
    0,
    3790000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/251886/samsung-galaxy-a12-2021-blue-600x600.jpg",
    ],
    "Samsung"
  ),
  new Product(
    "Điện thoại Realme C11 (2021) 4GB/64GB",
    0,
    3790000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/255483/realme-c11-2021-gray-600x600.jpg",
    ],
    "Realme"
  ),
  new Product(
    "Điện thoại Samsung Galaxy A12 4GB",
    0,
    3790000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/228151/samsung-galaxy-a12-xanh-600x600-1-600x600.jpg",
    ],
    "Samsung"
  ),
  new Product(
    "Điện thoại OPPO A15",
    0,
    3690000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/229885/oppo-a15-white-1-600x600.jpg",
    ],
    "OPPO"
  ),
  new Product(
    "Điện thoại OPPO A16K",
    0,
    3690000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/249945/oppo-a16k-thumb1-600x600-1-600x600.jpg",
    ],
    "OPPO"
  ),
  new Product(
    "Điện thoại Realme C21Y 3GB",
    0,
    3690000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/241771/realme-c21y-blue-600x600.jpg",
    ],
    "Realme"
  ),
  new Product(
    "Điện thoại Realme C21-Y 3GB",
    0,
    3690000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/253401/realme-c21-y-black-600x600.jpg",
    ],
    "Realme"
  ),
  new Product(
    "Điện thoại Samsung Galaxy A03s",
    0,
    3490000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/241049/samsung-galaxy-a03s-black-600x600.jpg",
    ],
    "Samsung"
  ),
  new Product(
    "Điện thoại Realme C12",
    0,
    3490000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/226733/realme-c12-do-13-600x600.jpg",
    ],
    "Realme"
  ),
  new Product(
    "Điện thoại Xiaomi Redmi 9C (4GB/128GB)",
    0,
    3490000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/246937/redmi-9c-xanh-la-600x600.jpg",
    ],
    "Xiaomi"
  ),
  new Product(
    "Điện thoại Nokia G10",
    0,
    3490000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/235995/Nokia g10 xanh duong-600x600.jpg",
    ],
    "Nokia"
  ),
  new Product(
    "Điện thoại Nokia 3.4",
    0,
    3290000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/227626/nokia-34-xam-600x600-600x600.jpg",
    ],
    "Nokia"
  ),
  new Product(
    "Điện thoại Realme C11 (2021)",
    0,
    2990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/236257/realme-c11-2021-blue-1-600x600.jpg",
    ],
    "Realme"
  ),
  new Product(
    "Điện thoại Realme C11 (2021) 2GB/32GB",
    0,
    2990000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/261957/realme-c11-2021-2gb-32gb-xanh-600x600.jpg",
    ],
    "Realme"
  ),
  new Product(
    "Điện thoại Samsung Galaxy A02",
    0,
    2590000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/228999/samsung-galaxy-a02-xanhduong-600x600-600x600.jpg",
    ],
    "Samsung"
  ),
  new Product(
    "Điện thoại Xiaomi Redmi 9A",
    0,
    2490000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/218734/xiaomi-redmi-9a-xanhduong-600x600-600x600.jpg",
    ],
    "Xiaomi"
  ),
  new Product(
    "Điện thoại Nokia C20",
    0,
    2190000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/236437/nokia-c20-vang-1-600x600.jpg",
    ],
    "Nokia"
  ),
  new Product(
    "Điện thoại Nokia 6300 4G",
    0,
    1090000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/230813/nokia-6300-xanh-ngoc-new-600x600-600x600.jpg",
    ],
    "Nokia"
  ),
  new Product(
    "Điện thoại Nokia 110 4G",
    0,
    850000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/240196/nokia-110-4g-yellow-600x600.jpg",
    ],
    "Nokia"
  ),
  new Product(
    "Điện thoại Nokia 210",
    0,
    790000.0,
    ["nodata", "nodata", "nodata"],
    ["https://cdn.tgdd.vn/Products/Images/42/200041/nokia-210-den-600x600.jpg"],
    "Nokia"
  ),
  new Product(
    "Điện thoại Nokia 105 4G",
    0,
    750000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/240194/nokia-105-4g-blue-600x600.jpg",
    ],
    "Nokia"
  ),
  new Product(
    "Điện thoại Nokia 150 (2020)",
    0,
    700000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/223115/nokia-150-2020-den-600x600.jpg",
    ],
    "Nokia"
  ),
  new Product(
    "Điện thoại Nokia 110",
    0,
    520000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/209788/nokia-110-2019-black-1-600x600.jpg",
    ],
    "Nokia"
  ),
  new Product(
    "Điện thoại Nokia 105 Dual SIM",
    0,
    420000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/207957/nokia-105-2019-blue-1-600x600.jpg",
    ],
    "Nokia"
  ),
  new Product(
    "Điện thoại Nokia 105 Single SIM",
    0,
    410000.0,
    ["nodata", "nodata", "nodata"],
    [
      "https://cdn.tgdd.vn/Products/Images/42/211934/nokia-105-2019-black-600x600.jpg",
    ],
    "Nokia"
  ),
];
