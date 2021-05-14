
let url = 'http://localhost:3000/api/teddies';

fetch( url , {method : 'GET'})
.then(data => {
    return data.json()
}).then(products => {
    console.log(products)

    let HTML = document.getElementById("produit")

    let myHTML = ""
    products.forEach(product => {
        console.log(product.name)
        console.log(product.price)
        myHTML += `<div class="card">
                        <figure><img class="indexImg" src=${product.imageUrl} alt="${product.name}"></figure>
                        <p>${product.name}</p>
                        <p>${product.price}</p>
                        <a href="produit.html?id=${product._id}">Voir le produit</a>
                    </div>`
    });

    console.log(myHTML)
    HTML.innerHTML = myHTML
})

