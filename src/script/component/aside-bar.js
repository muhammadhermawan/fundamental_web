class AsideBar extends HTMLElement {
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
            box-sizing: border-box;
        }

        .profile_side {
            font-family: 'Quicksand', sans-serif;
        }

        aside {
            float: right;
            width: 100%;
            padding-left: 10px;
            background-color: white;
         }

         @media screen and (max-width: 1000px) {
            #content,
            aside {
                width: 100%;
                padding: 0;
            }
         }

         #profil li {
            list-style-type: none;
            margin-top: 10px;
        }
        
        #profil h2 {
            text-align: center;
        }
        
        .profile_side {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 5px;
            margin-top: 10px;
        }

        img {
            width: 100px;
            max-height: auto;
            margin-left: 43%;
            border: 0.5px solid white;
            border-radius: 50%;
        }

        li {
            text-align: center;
        }

        </style>
        <aside class="profile_side" id="profil">
            <h2>Profil Perancang Web</h2>
            <figure>
                <img src="./src/asset/image/hermawan.jpg" alt="Foto_Profil" class="profil-image">
            </figure>
            <ul>
                <li>Nama: Muhammad Hermawan</li>
                <li>TTL: Pontianak, 28 September 1997</li>
                <li>Hobi: Desain dan Membaca</li>
                <li>Pemrograman: Web Programming</li>
            </ul>
        </aside>
        `;
    }
}

customElements.define("aside-bar", AsideBar);