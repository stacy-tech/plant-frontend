
const api = new PlantApi("http://localhost:3000")
const modal = new Modal()

// Plant.getPlants()

// user submit form function
document.querySelector("form").addEventListener("submit", handleUserSubmit)

function handleUserSubmit(e){
    e.preventDefault()
    console.log(e.target.user.value)
}