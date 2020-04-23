class FootBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }


    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        footer {
            padding: 20px;
            color: white;
            background-color: #00c659;
            text-align: center;
            margin-top: 20px;
            font-family: 'Quicksand', sans-serif;
        }

        .logo_support li {
            list-style-type: none;
            margin-left: 30px;
        }
        
        .logo_support img {
            width: 180px;
            max-height: auto;
        }
        
        .logo_support h3 {
            text-align: center;
        }

        </style>
        <footer>
            <h3>Supported by:</h3>
                <div class="logo_support">
                    <li><a href="https://dicoding.com"><img src="./src/asset/image/dicoding.png" alt="Logo_dicoding" class="dicoding"></a></li>
                    <li><a href="https://idcamp.indosatooredoo.com"><img src="./src/asset/image/idcamp.png" alt="Logo indosat" class="idcamp"></a></li>
                </div>
            <hr>
        <p>Belajar Dasar Pemrograman Web &#169; 2020, Dicoding Academy</p>
        </footer>
        `;
    }
}

customElements.define("footer-bar", FootBar);