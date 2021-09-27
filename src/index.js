
const api = new PlantApi("http://localhost:3000")
const modal = new Modal()
let user

// Plant.getPlants()

// user submit form function
document.querySelector("form").addEventListener("submit", handleUserSubmit)

function handleUserSubmit(e){
    e.preventDefault()
    document.getElementById("main").innerHTML = ""
    api.findOrCreateUser(e.target.user.value).then(userData => {
        user = userData
        Plant.getPlants()
    })
}

