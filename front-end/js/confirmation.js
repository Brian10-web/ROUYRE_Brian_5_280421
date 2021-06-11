if(localStorage.getItem("order_id")){

    let div = document.getElementById("orderID")

    let confirmation = `
    <div> 
        <h1>Voici votre numéro de commande</h1>
        ${localStorage.getItem("order_id")}
        <h2> Merci pour votre commande, à bientôt !!</h2>
    </div>
    `
    div.innerHTML = confirmation

    localStorage.clear();


} else {
    window.location = "index.html"
}
