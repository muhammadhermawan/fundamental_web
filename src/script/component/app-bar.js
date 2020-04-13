class AppBar extends HTMLElement {
    connectedCallBack(){
        this.render();
    }

    render() {
        this.innerHTML = `<h2>Club Finder</h2>`;
    }
}

customElements.define("app-bar", AppBar);