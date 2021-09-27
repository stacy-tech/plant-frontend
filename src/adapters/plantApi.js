class PlantApi {

    constructor() {
        this.baseUrl = "http://localhost:3000"
    }

    getPlants = () => fetch(this.baseUrl + "/plants").then(res => res.json())  

    // post a new plant created from the form
    createPlant = (newPlant) => {
        newPlant.user = user
        newPlant.user_id = user.id
        return fetch(this.baseUrl + "/plants", {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPlant),
        })
        .then(response => response.json())
    }

    // fetch request to create/find a user if already existed
    findOrCreateUser = (user) => {
        return fetch(this.baseUrl + "/users", {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({user}),
        })
        .then(response => response.json())
    }

    // delete plant request
    // static handleDelete = (e) => {
    //     fetch(this.baseUrl + `/plants/${id}`, {
    //         method: 'DELETE', 
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //         .then(res => res.json())
    //         .then(data => deletePlant(id))      
    //     })
    //     // console.log("deleted!")
    // }

}

