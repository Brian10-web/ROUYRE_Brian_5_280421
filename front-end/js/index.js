let url = 'http://localhost:3000/api/teddies';

fetch( url , {method : 'GET'})
.then(data => {
    return data.json()
}).then(products => {
    console.log(products)

    let HTML = document.getElementById("produit")

    let myHTML = ""

    if (products.length > 0){
         products.forEach(product => {
        myHTML += `<div class="card">
                        <figure><img class="indexImg" src=${product.imageUrl} alt="${product.name}"></figure>
                        <p>${product.name}</p>
                        <p>${product.price/100} € </p>
                        <a class=indexA" href="produit.html?id=${product._id}">Voir le produit</a>
                    </div>`
    });
    }
    HTML.innerHTML = myHTML
})


