
let url = 'http://localhost:3000/api/teddies';

fetch( url , {method : 'GET'})
.then(data => {
    return data.json()
}).then(items => {
    console.log(items)

    let HTML = document.getElementById("item")

    let myHTML = ""
    items.forEach(item => {
        console.log(item.name)
        console.log(item.price)
        console.log(item.description)
        myHTML += `<div class="oneCard">
                        <div class="boxImg"> 
                        <figure><img class="produitImg" src=${item.imageUrl} alt="${item.name}"></figure>
                        </div>
                        <div id="produitText">
                        <p>${item.description}
                        <p>${item.name}</p>
                        <p>${item.price}</p>
                        </div>
                    </div>`
    });

    console.log(myHTML)
    HTML.innerHTML = myHTML
})


console.log(window)
console.log(window.location)

const urlParams = new URLSearchParams(window.location.search);
const urlId = urlParams.get("_id");

console.log(urlId)
