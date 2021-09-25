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
    
    // submits my new plant form to send to my backend
    static handlesubmit = (e) => {
        e.preventDefault()
        const newPlant = {
            name: e.target.name.value,
            difficulty: e.target.difficulty.value,
            light: e.target.light.value,
            water: e.target.water.value,
            image_url: e.target.image_url.value
        }
        console.log(newPlant)
    }

    // add new plant form
    static addPlantForm = () => {
        modal.main.innerHTML += `
        <h1>Go Green</h1>
        <form>
            <label for="name">Name:</label><br>
            <input type="text" name="name"><br>
            <label for="difficulty">Difficulty:</label><br>
            <input type="text" name="difficulty"><br>
            <label for="light">Light:</label><br>
            <input type="text" name="light"><br>
            <label for="water">Water:</label><br>
            <input type="text" name="water"><br>
            <label for="image_url">Image:</label><br>
            <input type="text" name="image_url"><br><br>
            <input type="submit" value="Add Plant"><br>
        </form>
        `
        modal.main.querySelector("form").addEventListener("submit", this.handlesubmit)
        modal.open()
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
        addPlant.innerText = "New Plant"
        addPlant.addEventListener("click", this.addPlantForm)
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