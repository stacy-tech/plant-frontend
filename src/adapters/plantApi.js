class PlantApi {

    constructor() {
        this.baseUrl = "http://localhost:3000"
    }

    getPlants = () => fetch(this.baseUrl + "/plants").then(res => res.json())  

    // post a new plant created from the form
    createPlant = (newPlant) => fetch(this.baseUrl + "/plants", {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPlant),    
    })
    .then(response => response.json())
}