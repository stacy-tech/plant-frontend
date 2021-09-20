
// document.addEventListener('DOMContentLoaded', () => {
//     // console.log("Dom Content Loaded")
//     const api = new PlantApi
//     api.getPlants()

// })
const api = new PlantApi("http://localhost:3000")
Plant.getPlants()
// fetch("http://localhost:3000/plants").then(res => res.json()).then(console.log)