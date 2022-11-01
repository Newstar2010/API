const body = document.querySelector("body")
const Container = document.querySelector(".container")
const ShopCard = document.querySelector(".shoppingcard")

const Api = "https://fakestoreapi.com/products"

async function GetApi(api) {

    const argumentlar = await fetch(api)
    argumentlar.json()
        // .then(response => response.json())
        .then(response => MyFunc(response))
        .catch(error => console.log(error.message))
}
GetApi(Api)


function MyFunc(argu) {


    const sliceData = argu.slice(0, 20)
    console.log(sliceData)

    sliceData.forEach((product) => {

        let Container = document.createElement('div')
        let ShopCard = document.createElement('div')
        ShopCard.className = 'shoppingcard'
        let Img = document.createElement("img")
        let Title = document.createElement("h1")
        let Price = document.createElement("p")
        let Category = document.createElement("span")
        let Button = document.createElement("button")
        Button.className = 'AddCard'


        ShopCard.appendChild(Img)
        ShopCard.appendChild(Title)
        ShopCard.appendChild(Category)
        ShopCard.appendChild(Price)
        ShopCard.appendChild(Button)

        // Img.src = bitta_argument.image
        Img.setAttribute("src", product.image)
        Img.className = 'image'

        Title.innerHTML = product.title
        Price.innerHTML = product.price
        Category.innerHTML = product.category
        Button.innerHTML = "ADD TO CART"

        Container.className = 'container'
        Title.className = 'shoppingcard > h1'
        Category.className = 'shoppingcard > span'



        body.appendChild(Container)
        Container.appendChild(ShopCard)
        // bitta_argument.className = "shoppingcard"

        Button.addEventListener("click", () => AddtoCard(product))
    })

    console.log(argu);
}

const box = []

const H2 = document.querySelector(".cart > h2")

function AddtoCard(a) {

    console.log("AddtoCard ::", a);


    box.push(a)
    console.log("box :", box);
    H2.innerHTML = box.length
}