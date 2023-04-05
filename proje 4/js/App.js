let d=
{
    "id": 2,
    "title": "iPhone X",
    "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    "price": 899,
    "discountPercentage": 17.94,
    "rating": 4.44,
    "stock": 34,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/2/1.jpg",
      "https://i.dummyjson.com/data/products/2/2.jpg",
      "https://i.dummyjson.com/data/products/2/3.jpg",
      "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
    ]
  }


let i1=document.getElementById("i1")
let title=document.getElementById("title")
let price=document.getElementById("price")
let stock=document.getElementById("stock")
let category=document.getElementById("category")
let images=document.getElementById("images")
let b1 =document.getElementById("b1")
let button=document.getElementById("button")

function fget(){
i1.src=d.thumbnail
description.innerHtml=d.description
title.innerHTML=d.nom
brand.innerHTML=d.brand
price.innerHTML=d.price
type.innerHTML=d.category
evaluated.innerHTML=d.stock 
}
console.log(d)

b1.addEventListener("click",fget)
