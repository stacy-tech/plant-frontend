class PlantApi {

    constructor() {
        this.baseUrl = "http://localhost:3000"
    }

    getPlants = () => fetch(this.baseUrl + "/plants").then(res => res.json())

    // console.log("DOM content has loaded")
    // let url = "http://localhost:3000/plants"
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    
    // createPlants = (newPlant) => {
    //     newPlant.user_id = user.id 
    //     return fetch(this.baseUrl + "/plants", {
    //         method: 'POST', 
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(newPlant), 
    //     })
    //     .then(response => response.json())
    // }

}