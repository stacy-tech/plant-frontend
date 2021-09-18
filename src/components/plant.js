class Plant {
    
    static plants = []
    constructor(data) {
        this.data
        // this.name = name
        // this.difficulty = difficulty
        // this.light = light
        // this.water = water
        // this.image_url = image_url
        // this.user_id = user_id
        this.comments = this.data.comments.map(comment => new Comment(comment, this))
        this.constructor.call.push(this)
    }

    renderShow = () => {
        const {name, difficulty, light, water, image_url } = this.data
        document.getElementById("new-plant-form").innerHTML = `
        <div class="show">
            <h1>${name}</h1>
            <img src="${imageUrl}" alt=${name}/>
            <p>${difficulty}</p>
            <p>${light}</p>
            <p>${water}</p>
            <p>Listed by: ${name}<p>
            <div class="container"></div>
        </div> 
        `
        div.addEventListener("click", Plant.renderIndex)
        this.comments.forEach(comment => comment.render())
    }
}