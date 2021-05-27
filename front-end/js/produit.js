const urlParams = new URLSearchParams(window.location.search);
const urlId = urlParams.get("id");


let url = `http://localhost:3000/api/teddies/${urlId}`;

//recupération des données du tableau localhost

fetch( url , {method : 'GET'})
.then(data => {
    return data.json()
}).then((produit) => {
    // console.log(produit)
    // console.log(produit.name)
    // console.log(produit.description)
    // console.log(produit.price)

    // let HTML = document.getElementById("produit")

    let myHTML = ""

        myHTML += `     <div id="oneCard">
                        <div class="boxImg"> 
                        <figure><img class="produitImg" src=${produit.imageUrl} alt="${produit.name}"></figure>
                        </div>
                        <div id="produitText">
                        <p>${produit.description}</p>
                        <p>${produit.name}</p>
                        <p>${produit.price/100} €</p>
                        <div id="btn">
                        <select name="" id="select">

                        `

        produit.colors.forEach (color =>{    

        // un  myHtml en pus pour insérer la boucle foreach sinon ce n'est que du texte.
        myHTML +=   `<option value="${color}">${color}</option>`

                })

        myHTML += `                    
                    </select>
                    </div>
                    <a id="produitA" href="panier.html"> Ajouter au panier </a>
                    </div>
                    </div>`

    // incorportation des données dans le HTML
    console.log(myHTML)
    var Html =document.getElementById("main")
    Html.innerHTML= myHTML


    //Ajout d'un article au panier
    let btnPanier = document.getElementById("produitA");
    console.log(btnPanier);
    

    //évenement on click
    btnPanier.addEventListener("click", event => {
        event.preventDefault();
        console.log("click ok");
        
        let select = document.getElementById('select')
        let choice = select.selectedIndex;
        let color = select.options[choice].value;

        let panierComplet = []

        produit = {
            id : produit._id,
            name : produit.name,
            imageUrl : produit.imageUrl,
            description : produit.description,
            price : produit.price,
            color : color
        };

        //Si j'ai déja un panier
        let myCart = localStorage.getItem('article')
        if(myCart){
            myCart = JSON.parse(myCart)
            panierComplet = myCart
        }

        panierComplet.push(produit)

        selectProduit = JSON.stringify(panierComplet);
        //set item pour ajouter les données dans le localStorage
        localStorage.setItem('article' , selectProduit);
        console.log(localStorage.getItem('article'))

        alert("le produit à été ajouté au panier.")

    });

});
