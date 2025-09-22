var sp = {
    name : "Iphone 17 Air 1TB",
   price: "45.000.000 VNĐ", // Set the price here
   Image: "https://cdn.tgdd.vn/Products/Images/42/264104/iphone-15-pro-max-xanh-la-thumb-600x600.jpg",
   Description: "Iphone 17 Air, RAM 16GB, Chip A20, Camera 100MP, Pin 6000mAh, Sạc nhanh 80W",
   stock: {
        qty: 100,
        status: "Còn hàng"
    },
    reviews: [
        { rating: 5, comment: "Rất tốt" },
        { rating: 5, comment: "Mua về dùng rất thích" },
        { rating: 3, comment: "Giá hơi cao" }
    ]
   }
var spname = document.getElementById("ip-name");
spname.innerText = sp.name;

document.getElementById("ip-price").innerText = sp.price;
document.getElementById("ip-img").src = sp.Image;
document.getElementById("ip-des").innerText = sp.Description;
document.getElementById("ip-stock").innerText = sp.stock.qty.status ;

var rvHtml ="";
for(var i=0; i<sp.reviews.length; i++){
    var rate=sp.review[i].rate;
    var review=sp.review[i].review;
    rvHtml = `${rvHtml}<li>` ${sp.reviews[i].rate}*-${sp.review[i].review} </li>
}
 const url = "http://127.0.0.1:5500/data/product.json"
 fetch(url).then(rs=>rs.json())
 .then(function(data){
 });

 //su dung du lieu
 me=document