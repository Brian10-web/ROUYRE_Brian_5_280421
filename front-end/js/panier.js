// Page panier ou il faut récuperer les inforations qui se trouve dans le localStorage
//fetch méthode get
//afficher tous les produits du panier
//calculer le prix total 


let myCart = JSON.parse(localStorage.getItem('article'));

console.log(myCart);

let toutPanier = document.getElementById("panierMain");
console.log(toutPanier);

if(myCart === null) {

    let panierVide = `
    <div id=panierMain>
    <div>Le panier est vide</div>
    </div>
    `;
    toutPanier.innerHTML = panierVide;

} else {
    
    let structurePanier = [];

    for(i = 0; i < myCart.length; i++) {
        
        structurePanier = 
            structurePanier + `
        <div id="panierElements">
            <div>
            
                Name - ${myCart[i].name}
                ${myCart[i].imageUrl}
                Price - ${myCart[i].price}

            </div>
        </div>
        `;
    }
        if (i == myCart.length) {
            toutPanier.innerHTML = structurePanier;
        }
      
}