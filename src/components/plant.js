class Plant {

    // plant data(storing all my plants in static all)
    static all = []
    constructor(data){
        this.data = data
        this.constructor.all.push(this)
    }

    // renderPlantCard method (appending my plants innerhtml)
    renderPlantCard = () => {
        const {name, difficulty, light, water, image_url, id } = this.data
        document.getElementById("plant-container").innerHTML += `
        <div class="plant-card" data-id=${id}>
            <img src=${image_url} alt=${name}/>
            <p class="title">${name}<p>
            <p>${difficulty}</p>
            <p>${light}</p>
            <p>${water}</p>
        </div>`
    }

    // finding the instance of a plant
    static find = (id) => this.all.find(plant => plant.data.id == id) 

    // Getting my plants (iterating from the api)
    static getPlants = () => {
        api.getPlants().then(plants => {
            plants.forEach(plant => new Plant(plant))
            this.renderPlants()
        })
    }

    // rendering my plants into the main container onto the page whilst creating my own elements
    // cleared out my ordinary html and replaced it with new ones upon returning home 
    static renderPlants = () => {
        const main = document.getElementById("main")
        main.innerHTML = ""
        const plantContainer = document.createElement("div")
        plantContainer.id = "plant-container"
        const addPlant = document.createElement("button")
        addPlant.innerText = "Add a New Plant"
        addPlant.addEventListener("click", modal.open)
        // append is used to add multiply arguments
        main.append(plantContainer, addPlant) 
        this.all.forEach(plant => plant.renderPlantCard())
        plantContainer.addEventListener("click", this.handlePlantClick)
    }
    // clicks on either the name or image and will produce the plants id 
    static handlePlantClick = (e) => {
        if (e.target.tagName == "IMG" || e.target.classList.contains("title")) {
            const id = e.target.closest(".plant-card").dataset.id
            this.find(id).renderShow()
        }
    }

    // upon clicking a plant it renders to its show page with its data/info
    // replaceing the innerHTML with this new one
    renderShow = () => {
        const {name, difficulty, light, water, image_url} = this.data
        document.getElementById("main").innerHTML = `
        <div class="show">
            <h1>${name}</h1>
            <img src="${image_url}" alt=${name}/>
            <p>${difficulty}</p>
            <p>${light}</p>
            <p>${water}</p>
        </div>
        <br>
        <button id="home">Home</button>
        `
        document.getElementById("home").addEventListener("click", Plant.renderPlants)
    }
      
}