class PlantApi {

    constructor() {
        this.baseUrl = "http://localhost:3000"
    }

    getPlants = () => fetch(this.baseUrl + "/plants").then(res => res.json())  

    // post a new plant created from the form
    createPlant = (newPlant) => {
        // console.log('new plant: ', newPlant)
        // newPlant.user = user
        //newPlant.user_id = user.id
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
        // console.log('find or create user', user)
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
    // deletePlant(id){
        
    //     fetch(this.baseUrl + `/plants/${id}`, {
    //         method: 'DELETE',  
    //     })
    //     .then(res => res.json())
    //     .then(obj => {
    //         console.log(obj);
    //         alert('Plant was deleted');
    //     })
    // }

}

