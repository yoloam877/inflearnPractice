/*
-innerHTML: 선택자 아래 하위 요소들을 입력한 내용으로 변경
*/

// =====================================================================

// 해당 상품에 대한 배열 생성
let products = [
  {
    name: "농구공",
    price: 10000,
    seller: "조던",
    imageUrl: "images/products/basketball1.jpeg",
  },
  {
    name: "축구공",
    price: 50000,
    seller: "메시",
    imageUrl: "images/products/soccerball1.jpg",
  },
  {
    name: "키보드",
    price: 10000,
    seller: "그랩",
    imageUrl: "images/products/keyboard1.jpg",
  },
];

let productHtml = ""; //  빈 문자열 선언

for (let i = 0; i < products.length; i++) {
  let product = products[i]; //  해당 생성한 배열 인덱스에 따른 정보에 대한 product 변수 생성

  productHtml += `<div class="product-card">
    <div>
      <img
        class="product-img"
        src="${product.imageUrl}"
        alt=""
      />
    </div>
    
    <div class="product-contents">
      <span class="product-name">${product.name}</span>
      <span class="product-price">${product.price}</span>
      <div class="product-seller">
        <img
          class="product-avatar"
          src="images/icons/avatar.png"
          alt=""
        />
        <span>${product.seller}</span>
      </div>
    </div>
    </div>`;
}
