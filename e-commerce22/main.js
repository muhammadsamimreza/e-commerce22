let totalPrice=0;

let product =[{
        
        id: '0',
        image: "./images/01.png",
        title: ' Oleves Watch',
        price: 300,
        
    },
   {
        id: '1',
        image: "./images/02.png",
        title: 'Oleves Watch',
        price: 200,
        catagory: 'sports'},
   
    {
        id: '2',
        image: "./images/03.png",
        title: 'Oleves Watch',
        price: 500,
        catagory: 'wear'},

    { 
        id: '3',
        image: "./images/04.png",
        title: 'Oleves Watch',
        price: 800,
        catagory: 'cloths'},

        { 
            id: '3',
            image: "./images/05.png",
            title: 'Oleves Watch',
            price: 1000,
            catagory: 'cloths'},
            { 
                id: '3',
                image: "./images/07.png",
                title: 'Oleves Watch',
                price: 1100,
                catagory: 'cloths'}            
]

let data=''
for(let pro in product){
    const sinPro = product[pro]

    data+=`
    <div class="text-center mx-auto">
            <div class="border-2 space-y-1 border-[#f59e0b] py-3">
                 <div class=" flex justify-center"><img class="w-44 h-36" src="${sinPro.image}"></div> 
             
            <div class="text-[16px] font-semibold">${sinPro.title}</div>
            <div class="text-red-500 font-semibold">$${sinPro.price}</div>
         
         <div> <button id="" onclick=btn(${pro}) class="bg-[#f59e0b] w-[90%] rounded-md text-blue-500 font-bold py-1 hover:bg-green-500 hover:text-red-700">Add to cart</button></div>
        </div>
    </div>`

    
    console.log(data)
}
document.getElementById('pbox').innerHTML=data;



let cdata ='';

function btn(index) {
    totalPrice += product[index].price;


    const coutPro = product[index ];

    cdata+=`
    <div class="text-center mx-auto">
            <div class="border-2 space-y-1 border-[#f59e0b] py-3 flex justify-between px-2">
            <div class="text-[16px] font-semibold">${coutPro.title}</div>
            <div class="text-red-500 text-[16px] font-semibold">$${coutPro.price}</div> 
        </div>
    </div>`

    document.getElementById('myCart').innerHTML= cdata;

    document.getElementById("totalp").innerHTML=totalPrice;
}

   
   
