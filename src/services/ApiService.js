class ApiService {

    constructor() {
        this.baseUrl = "http://localhost:3000/plants"
    }

    getPlants() {
        fetch(this.baseUrl + "/plants")
        .then(res => res.json())
        .then(plants => plants.forEach(plant => renderPlants(plant)))
    }

    CreatePlant = (newPlant) => {
        newPlant.user_id = user.user_id
        return fetch(this.baseUrl + "/plants", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPlant),
        })
        .then(response => response.json())
    }

    // findOrCreateUser = (name) => {
    //     return fetch(this.baseUrl + "/users", {
    //         method: "POST", 
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({name: name}),
    //     })
    //     .then(response => response.json())
    // }

}