class Plant {

    static all = []

    constructor(data){
        this.data = data
        this.comments = this.data.comments.map(comment => new Comment(comment, this))
        this.constructor.all.push(this)
    }

    // renderPlantCard method (appending my plants innerhtml)
    renderPlantCard = () => {
        const {name, difficulty, light, water, imageUrl, id } = this.data
        document.getElementById("plant-container").innerHTML += `
        <div class="plant-card" data-id=${id}>
            <img src=${imageUrl} alt=${name}/>
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
            image_url: e.target.imageUrl.value,   
        }
        api.createPlant(newPlant).then(plant => {
            new Plant(plant).renderPlantCard()
        })
        modal.close()
        e.target.reset()   
    }

    // add new plant form
    static addPlantForm = () => {
        modal.main.innerHTML = `
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
            <label for="imageUrl">Image:</label><br>
            <input type="text" name="imageUrl"><br><br>
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
            // Plant.all = []
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
        plantContainer.classList.add("container")
        const addPlant = document.createElement("button")
        addPlant.innerText = "Add New Plant"
        addPlant.addEventListener("click", this.addPlantForm)
        const addAlpha = document.createElement("button")
        addAlpha.innerText = "Alpha"
        addAlpha.addEventListener("click",this.sortPlant)
        // append is used to add multiply arguments
        main.append(plantContainer, addPlant, addAlpha) 
        this.all.forEach(plant => plant.renderPlantCard())
        plantContainer.addEventListener("click", this.handlePlantClick)      
    }

    // alphabetizes my plant-cards
    static sortPlant = (e) => {
        const plants = Plant.all
        document.getElementById("main").innerHTML +=
        plants.sort(function(a,b) {
            if (a.data.name < b.data.name){
                return -1
            }
            else{
                return 1
            }   
        })
          
        Plant.renderPlants() 
    }

   
     

    // clicks on either the name or image and will produce the plants id 
    static handlePlantClick = (e) => {
        if (e.target.tagName == "IMG" || e.target.classList.contains("title")) {
            const id = e.target.closest(".plant-card").dataset.id
            this.find(id).renderShow()
        } 
    }

    // upon clicking a plant it renders to its show page with its data/info
    renderShow = () => {
        const {name, difficulty, light, water, imageUrl, username, id} = this.data
        document.getElementById("main").innerHTML = `
        <div class="show"  id=${id}>
            <h1>${name}</h1>
            <img src="${imageUrl}" alt=${name}/>
            <p>${difficulty}</p>
            <p>${light}</p>
            <p>${water}</p>
            <p>Listed by: ${username}</p>
            <div class="container"></div>
        </div>
        <br><br>
        <button id="comment">Comment</button>
        <br><br>
        <button id="delete">Delete</button><br><br><button id="home">Home</button><br>
        `

        // comment button click event listener
        document.getElementById("comment").addEventListener("click", () => Comment.addCommentForm())
        

        // delete plant method by id 
        document.getElementById("delete").addEventListener("click", () => {
            const id = parseInt(document.getElementsByClassName('show')[0].id)
            const element = Plant.all.find((el) => el.data.id === id)
            api.deletePlant(id).then(() => {
                Plant.all.splice(Plant.all.indexOf(element), 1)
                const plants = document.getElementsByClassName('plant-card')
                for (const plant of plants) {
                    plant.remove()
                }
                Plant.renderPlants()
            })
        })
        // home button click event listener
        document.getElementById("home").addEventListener("click", Plant.renderPlants)
        this.comments.forEach(comment => comment.render())   
  
    }
}