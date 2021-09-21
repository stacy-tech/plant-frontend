class Plant {

    // plant data(storing all my plants in static all)
    static all = []
    constructor(data){
        this.data = data
        this.constructor.all.push(this)
    }

    // renderCard method (appending my plants innerhtml)
    renderCard = () => {
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

    // clicks on either the name or image and will produce the plants id 
    static handlePlantClick = (e) => {
        if (e.target.tagName == "IMG" || e.target.classList.contains("title")) {
            console.log(e.target.closest(".plant-card").dataset.id)
        }
    }

    // rendering my plants into the main container onto the page whilst creating our own elements
    static renderPlants = () => {
        const plantContainer = document.createElement("div")
        plantContainer.id = "plant-container"
        // plantContainer.classList.add("plant-container")
        document.getElementById("main").appendChild(plantContainer)
        this.all.forEach(plant => plant.renderCard())
        plantContainer.addEventListener("click", this.handlePlantClick)
    }

    // Getting my plants (iterating from the api)
    static getPlants = () => {
        api.getPlants().then(plants => {
            plants.forEach(plant => new Plant(plant))
            this.renderPlants()
        })
    }
    
    // static plants = []
    // constructor({name, difficulty, light, water, image_url, user_id }) {
    //     this.name = name
    //     this.difficulty = difficulty
    //     this.light = light
    //     this.water = water
    //     this.image_url = image_url
    //     this.user_id = user_id
    //     Plant.plants.push(this)
        
    // }

    // render() {
    //     const div = document.createElement("div")
    //     const h2 = document.createElement("h2")
    //     const p = document.createElement("p")
    //     div.id = `plant-${this.name}`
    //     div.appendChild(h2)
    //     div.appendChild(p)
    //     div.addEventListener("click", this.plant)

    //     document.querySelector(".container").appendChild(div)

    // }
}