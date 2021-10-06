class PlantApi {

    constructor(api) {
        this.api = api
    }

    getPlants = () => fetch(this.api + "/plants").then(res => res.json())  

    // post a new plant created from the form
    createPlant = (newPlant) => {
        newPlant.user_id = user.id
        return fetch(this.api + "/plants", {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPlant),
        })
        .then(response => response.json())
    }

    // fetch request to create/find a user if already existed
    findOrCreateUser = (username) => {
        return fetch(this.api + "/users", {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: username}),
        })
        .then(response => response.json())
    }

    // delete plant request
    deletePlant(id){
        return fetch(this.api + `/plants/${id}`, { 
            method: 'DELETE'   
        })
        .then(res => {
            console.log(res)
            return res.json
        })
       
    }

}

