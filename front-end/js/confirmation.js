if(localStorage.getItem("order_id")){

    let div = document.getElementById("orderID")

    let confirmation = `
    <div> 
        <h1>VOici votre numéro de commande</h1>
        ${localStorage.getItem("order_id")}
    </div>
    `
    div.innerHTML = confirmation

    localStorage.removeItem("article");
    localStorage.removeItem("responseId");
} else {
    window.location = "index.html"
}
