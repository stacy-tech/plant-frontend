class Modal {

    get model(){
        document.querySelector("#myModal")
    }

    open = () => {
        this.model.style.display = "block"
    }

    close = () => {
        this.model.style.display = "none"
    }

}