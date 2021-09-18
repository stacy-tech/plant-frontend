class ApiService {

    constructor() {
        this.baseUrl = "http://localhost:3000"
    }

    getPlants = () => fetch(this.baseUrl + "/plants").then(res => res.json())
    
    createPlants = (newPlant) => {
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

}