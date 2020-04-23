import covid from "../data/covid.js";

class CovidBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    
    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
                <h4>Sebaran Data Covid-19 di Indonesia</h4>
                <div class="card">
                    <div class="card-body">
                        <h5>Kasus Covid-19 Terkonfirmasi</h5>
                        <p>${covid.cases} orang</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5>Kasus Covid-19 Meninggal</h5>
                        <p>${covid.deaths} orang</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5>Sembuh dari Covid-19 </h5>
                        <p>${covid.recovered} orang</p>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("covid-bar", CovidBar);
