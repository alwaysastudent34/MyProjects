var b1=document.querySelector("#b2")
var dRow=document.querySelector("#dRow")
var url="https://dummyjson.com/products"

function fData(data){
    console.log(data)
    var produits=data.products 
    for(v of produits){
    let code=
    `<div class="col-md-4 mb-5">
            <div class="card">
                <img  class="card-img-top" src="${v.thumbnail}"/>
                <div class="card-body">
                    <div class="card-title">
                        <h4 >${v.title}</h4>
                    </div>
                <p class="card-text">
                        An Apple mobile which is nothing like apple.
                    </p>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            Price :<span  class="badge text-bg-success">${v.price}</span>
                        </li>
                        <li class="list-group-item">
                            Category :<span class="badge text-bg-primary">${v.cagegory}</span>
                        </li>
                        <li class="list-group-item">
                            Stock :<span class="badge text-bg-info">${v.price}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>`;
        dRow.innerHTML=dRow.innerHTML+code

    }




}
function fOk(response){
    response.json()
    .then(fData)
}
function fLoadOverHTTPV1() {
    fetch(url)
    .then(fOk)
}
b1.addEventListener("click",fLoadOverHTTPV1)