    // Page panier ou il faut récuperer les inforations qui se trouve dans le localStorage
    //fetch méthode get
    //afficher tous les produits du panier
    //calculer le prix total 

    // const { assert } = require("console");

    // const { log } = require("console");


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


    //afficher le formulaire en html

    let afficherFormulaire = () => {

        // selection élément du DOM pour le positionnement du formulaire
        let positionForm = document.querySelector("#container");
        let structureFormulaire = `
        <div id="formaulaireCommande">
            <h2>Remplissez le formulaire pour valider la commande</h2>
        
            <form action="#">
                <p>
                    <label for="prenom">Prénom : </label><br><span id="prenomManquant" class="infosManquantes"></span>
                    <input type="text" id="prenom" name="prenom" placeholder="Ex : Nelson" required>
                </p>
                <p>
                    <label for="nom">Nom : </label><span id="nomManquant" class="infosManquantes"></span>
                    <input type="text" id="nom" name="nom" placeholder="Ex : Alaporte" required>
                </p>
                <p>
                    <label for="adresse">Adresse : </label><span id="adresseManquant" class="infosManquantes"></span>
                    <textarea id="adresse" name="adresse" placeholder="Votre adresse" required></textarea>
                </p>
                <p>
                    <label for="ville">Ville : </label><span id="villeManquant" class="infosManquantes"></span>
                    <input type="text" id="ville" name="ville" placeholder="Votre ville" required>
                </p>
                <p>
                    <label for="mail">Votre adresse mail : </label><span id="mailManquant" class="infosManquantes"></span>
                    <input type="email" id="mail" name="mail" placeholder="Ex : votremail@mail.com" required>
                </p>

                <button id="envoyerFormulaire" type="submit" name="envoyerFormulaire"> Envoyer le formulaire</button>
                </form>

        </div>
        `;

        positionForm.insertAdjacentHTML("afterend" , structureFormulaire);
    }

    //Affichage du formulaire

    afficherFormulaire();

    // selection du bouton envoyer le formulaire

    let btnEnvoyerFormulaire = document.querySelector("#envoyerFormulaire");
    //Add event listener

    btnEnvoyerFormulaire.addEventListener("click", (e) => {

        e.preventDefault()

        class Formulaire{
            constructor(){
                this.prenom = document.querySelector("#prenom").value;
                this.nom = document.querySelector("#nom").value;
                this.adresse = document.querySelector("#adresse").value;
                this.ville = document.querySelector("#ville").value;
                this.mail = document.querySelector("#mail").value;
            }
        }

    //Appel de l'instance de la classe Formulaire pour créer l'objet formulaireValues
    const formulaireValues = new Formulaire();


    // Gestion de validation du champ input 

    let textAlert = (value) => {
            return `Le champ : "${value}" n'a pas été bien rempli. \n\n Chiffre et symboles ne sont pas autorisés \n Ne pas dépassser 20 caractères et en avoir minimum 3 `
    }

    let regExPrenomNomVille = (value) => {
        return /^[A-Za-z]{3,20}$/.test(value);
    }

    let regExEmail = (value) => {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
    }

    let regExAdresse = (value) => {
        return /^[A-Za-z0-9\s]{5,50}$/.test(value);
    }

    // fonction pour afficher le message d'erreur lorsque les infos sont mauvaise
    function inputVide (querySelectorId){
        document.querySelector(`#${querySelectorId}`).textContent= "";
    }

    function inputFaux (querySelectorId){
        document.querySelector(`#${querySelectorId}`).textContent= "Veuillez bien remplir ce champ";
    }


    function prenomCheck(){
        let lePrenom = formulaireValues.prenom;
        if (regExPrenomNomVille(lePrenom)) {
            inputVide("prenomManquant");
            return true;
        } else {
            inputFaux("prenomManquant")
            alert(textAlert("Prénom"));
            return false;
        };
    };

    function nomCheck() {
        let leNom = formulaireValues.nom;
        if(regExPrenomNomVille(leNom)){
            inputVide("nomManquant");
            return true;
        }else{
            inputFaux("nomManquant");
            alert(textAlert("Nom"));
            return false;
        };
    };

    function villeCheck () {
        let laVille = formulaireValues.ville;
        if(regExPrenomNomVille(laVille)){
            inputVide("villeManquant");
            return true;
        }else{
            inputFaux("villeManquant");
            alert(textAlert("La ville"));
            return false;
        };
    };

    function mailCheck () {
        let leMail = formulaireValues.mail;
        if(regExEmail(leMail)){
            inputVide("mailManquant");
            return true;
        }else{
            inputFaux("mailManquant");
            alert("Ladresse mail n'est pas valide");
            return false;
        };
    };

    function adresseCheck () {
        let laAdresse = formulaireValues.adresse;
        if(regExAdresse(laAdresse)){
            inputVide("adresseManquant");
            return true;
        } else {
            inputFaux("adresseManquant");
            alert("L'adresse doit être renseignée comme dans l'exemple qui vous est donné.")
            return false;
        };
    };

    if(prenomCheck() && nomCheck() && villeCheck() && mailCheck() && adresseCheck()){

        // mettre toutes les données dans un objet à envoyer au serveur

        //Traitmeent de mes données
        
        let donneesAEnvoyer = {
            contact: {
                firstName: formulaireValues.prenom,
                lastName: formulaireValues.nom,
                address: formulaireValues.adresse,
                city: formulaireValues.ville,
                email: formulaireValues.mail
            },
            products: []
        }

        myCart.forEach(element => {
            donneesAEnvoyer.products.push(element.id);
        });

        // envoi de l'objet vers le serveur
        envoiVersServeur(donneesAEnvoyer);

        console.log(donneesAEnvoyer);


        }else{
            alert("Veuillez bien remplir le formulaire")
        }

    });




    function envoiVersServeur(donneesAEnvoyer){

        let url = "http://localhost:3000/api/teddies/order";

        fetch( url , {
            method: "POST",
            body: JSON.stringify(donneesAEnvoyer),
            headers : {
                "content-type" : "application/json",
            },
        })
        .then(data => {
            return data.json()
        }).then(response => {
           console.log(response);
           localStorage.setItem("order_id", response.orderId);
           window.location = "confirmation.html"
        }) .catch(e => {
            alert(`Problème avec le serveur : erreur ${e.status}`)
        })
        console.log(donneesAEnvoyer);

    }


    // prendre la key du localstorage et mettre dans une variable
    const dataLocalStorage = localStorage.getItem("formulaireValues");
    // convertir la chaine de caractère en objet java
    const dataLocalStorageObjet = JSON.parse(dataLocalStorage);

    // mettre les valeurs du localstorage dans les champs du formulaire
    document.querySelector("#prenom").value = dataLocalStorageObjet.prenom;
    document.querySelector("#nom").value = dataLocalStorageObjet.nom;
    document.querySelector("#adresse").value = dataLocalStorageObjet.adresse;
    document.querySelector("#ville").value = dataLocalStorageObjet.ville;
    document.querySelector("#mail").value = dataLocalStorageObjet.mail;



