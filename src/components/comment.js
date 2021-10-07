class Comment {

    constructor(data, plant){
        this.data = data 
        this.plant = plant    
    }
    
    // rendering comments 
    render = () => {
        const {text} = this.data
        document.querySelector(".container").innerHTML += `
        <h1>Comment</h1>
        <div class="card">
        <p>${text}</p>
        </div>
        `
    }

    
}