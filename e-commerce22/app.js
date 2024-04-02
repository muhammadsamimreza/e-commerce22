// let totalPrice=0;
let cartData = [];

let product = [
  {
    id: "0",
    image: "./images/01.png",
    title: " Oleves Watch",
    price: 300,
  },
  {
    id: "1",
    image: "./images/02.png",
    title: "Oleves Watch",
    price: 200,
    catagory: "sports",
  },

  {
    id: "2",
    image: "./images/03.png",
    title: "Oleves Watch",
    price: 500,
    catagory: "wear",
  },

  {
    id: "3",
    image: "./images/04.png",
    title: "Oleves Watch",
    price: 800,
    catagory: "cloths",
  },

  {
    id: "3",
    image: "./images/05.png",
    title: "Oleves Watch",
    price: 1000,
    catagory: "cloths",
  },
  {
    id: "3",
    image: "./images/07.png",
    title: "Oleves Watch",
    price: 1100,
    catagory: "cloths",
  },
];
function removebtn(pro) {
  delete cartData[pro];
  showCartData();
}

function showCartData() {
  let totalPrice = 0;
  let cartTempdata = "";

  for (let pro in cartData) {
    let proIndex = cartData[pro];
    const sinPro = product[proIndex];

    totalPrice += parseInt(sinPro.price);

    cartTempdata += `<div class="text-center mx-auto">
        <div class="border-2 space-y-1 border-[#f59e0b] py-3">
             <div class=" flex justify-center"><img class="w-44 h-36" src="${sinPro.image}"></div> 
         
        <div class="text-[16px] font-semibold">${sinPro.title}</div>
        <div class="text-red-500 font-semibold">$${sinPro.price}</div>
     
     <div> <button id="" onclick='removebtn(${pro})' class="bg-[#f59e0b] w-[90%] rounded-md text-blue-500 font-bold py-1 hover:bg-green-500 hover:text-red-700">Remove</button></div>
    </div>
    </div>
        
        `;
  }
  document.getElementById("ppbox").innerHTML = cartTempdata;
}

function btn(items) {
  cartData.push(items);
  document.cookie = `items=${cartData}`;
  console.log(document.cookie);
  showCartData();
}

let data = "";
for (let pro in product) {
  const sinPro = product[pro];

  data += `
    <div class="text-center mx-auto">
            <div class="border-2 space-y-1 border-[#f59e0b] py-3">
                 <div class=" flex justify-center"><img class="w-44 h-36" src="${sinPro.image}"></div> 
             
            <div class="text-[16px] font-semibold">${sinPro.title}</div>
            <div class="text-red-500 font-semibold">$${sinPro.price}</div>
         
         <div> <button id="" onclick=btn(${pro}) class="bg-[#f59e0b] w-[90%] rounded-md text-blue-500 font-bold py-1 hover:bg-green-500 hover:text-red-700">Add to cart</button></div>
        </div>
    </div>`;

  console.log(data);
}
document.getElementById("pbox").innerHTML = data;
