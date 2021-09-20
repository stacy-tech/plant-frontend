class Plant {

    // plant data
    static all = []
    constructor(data){
        this.data = data
        this.constructor.all.push(this)
    }

    // renderCard method
    renderCard = () => {
        const {name, difficulty, light, water, imageUrl, user_id} = this.data
        document.querySelector(".plant-container").innerHTML += `
        <div class="plant-card">
            <img src=${imageUrl} alt=${name}/>
            <p class="title">${name}<p>
            <p>${difficulty}</p>
        </div>`
    }

    // adding my Plants
    // static addPlant(plant){
    //     new Plant(plant)
    // }

    // rendering my plants into the main container onto the page whilst creating our own elements
    static renderPlants(){
        const plantContainer = document.createElement("div")
        plantContainer.classList.add("plant-container")
        document.getElementById("main").appendChild(plantContainer)
        this.all.forEach(plant => plant.renderCard())
    }

    // Getting my plant
    static getPlants(){
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