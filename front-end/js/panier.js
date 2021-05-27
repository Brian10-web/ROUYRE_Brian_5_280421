// Page panier ou il faut récuperer les inforations qui se trouve dans le localStorage
//fetch méthode get
//afficher tous les produits du panier
//calculer le prix total 


let myCart = JSON.parse(localStorage.getItem('article'));
let toutPanier = document.getElementById("panierMain");

if(myCart === null) {

    let panierVide = `
    <div id=panierMain>
    <div>Le panier est vide</div>
    </div>
    `;
    toutPanier.innerHTML = panierVide;

} else {
    
    let structurePanier = [];

    myCart.forEach((produitPanier, i) => {   
        structurePanier = structurePanier + `
        <div id="panierElements">
            <div id="panierElement">
                <div id="panierNameImage">
                    Nom de l'ourson : ${produitPanier.name} <br>
                    Couleur : ${produitPanier.color}
                    <figure id="panierFig"><img class="panierImg" src=${produitPanier.imageUrl}></figure>
                </div>
                <div id="panierPrice">
                Prix : ${produitPanier.price/100} €
                <button onClick="deleteItem(this, ${produitPanier.id} , '${produitPanier.color}')" class="btn-supprimer">Supprimer</button>
                </div>
            </div>
        </div>
        `;
        if (i === myCart.length-1)toutPanier.innerHTML = structurePanier;
        console.log(produitPanier.id)
    })

    
    
      
};
/*************************************BOUTON SUPPRIMER****************************************/

function deleteItem (e, produitid , coleur){
    console.log(e, produitid , coleur)
    myCart = myCart.filter ( produit => {
        produit.id != produitid && produit.color != coleur
    })

    localStorage.setItem('article', myCart)
}


//selection du bon id 


// declaration de variable (tableau) pour y stocker les prix des différents articles
let prixTotal = [];
// aller chercher les informations dans le panier
for (j = 0; j < myCart.length; j++){
    let prixProduit = myCart[j].price/100;
// mettre les infos dans le tableau
    prixTotal.push(prixProduit)
    console.log(prixProduit)
}

// additioner les valeurs du tableau (méthode reduce)

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const additionTotal = prixTotal.reduce(reducer, 0);
//afficher dans le code html
const affichagePrix = `
<div><h2 class="titlePanier2">
Total de votre panier : ${additionTotal} €
</h2></div>
`

toutPanier.insertAdjacentHTML("beforeend", affichagePrix);