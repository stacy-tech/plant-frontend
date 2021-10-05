class Comment {

    constructor(data){
        this.data = data     
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