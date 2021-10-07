class PlantApi {

    constructor(api) {
        this.api = api
    }
     
    // get all plants from api 
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

    // fetch request to find/create a user
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

