const form = document.querySelector("form")
const h2 = document.querySelector("h2")

form.addEventListener("submit", Myfunc)

function Myfunc(event) {
    event.preventDefault();
    const Name = event.target[0].value
    const Email = event.target[1].value
    const Password = event.target[2].value
    console.log(Name)
    console.log(Email)
    console.log(Password)




    // local storagega malumot joylash
    localStorage.setItem("name", Name)
    localStorage.setItem("email", Email)
    localStorage.setItem("password", Password)

    // local storagedan  malumot olish
    const localData = localStorage.getItem("name")


    console.log(location.replace("./index.html"))




}