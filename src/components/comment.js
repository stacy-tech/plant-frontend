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

    // submits my new comment form to send to my backend
    static handlesubmit = (e) => {
       e.preventDefault()
       const newComment = {
           text: e.target.text.value,  
       }
       api.createComment(newComment).then(comment => {
           new Comment(comment).render()
       })
       modal.close()
       e.target.reset()   
   }

    // new comment form
    static addCommentForm = () => {
        modal.main.innerHTML = `
        <h1>Go Green</h1>
        <form>
            <label for="text">Text:</label><br>
            <input type="text" name="text"><br><br>
            <input type="submit" value="Post Comment"><br>
        </form>
        `
        modal.main.querySelector("form").addEventListener("submit", this.handlesubmit)
        modal.open()
    }


    
}