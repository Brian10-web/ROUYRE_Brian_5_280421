const urlParams = new URLSearchParams(window.location.search);
const urlId = urlParams.get("id");
console.log(urlId)

let url = `http://localhost:3000/api/teddies/${urlId}`;

fetch( url , {method : 'GET'})
.then(data => {
    return data.json()
}).then((produit) => {
    console.log(produit)
    console.log(produit.name)
    console.log(produit.description)
    console.log(produit.price)

    // let HTML = document.getElementById("produit")

    let myHTML = ""

        myHTML += `     <div id="oneCard">
                        <div class="boxImg"> 
                        <figure><img class="produitImg" src=${produit.imageUrl} alt="${produit.name}"></figure>
                        </div>
                        <div id="produitText">
                        <p>${produit.description}</p>
                        <p>${produit.name}</p>
                        <p>${produit.price}</p>
                        <div id="btn">
                        <select name="" id="">

                        `

        produit.colors.forEach (color =>{    

        myHTML +=   `<option value="${color}">${color}</option>`

                })

        myHTML += `                    
                    </select>
                    </div>
                    <a class="produitA" href="panier.html"> Acheter </a>
                    </div>
                    </div>`

    console.log(myHTML)
    var Html =document.getElementById("main")
    Html.innerHTML= myHTML
});

