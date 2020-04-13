//awalnya deklarasi variabel dengan var tetapi menyesuaikan standar ES6 jadi menggunakan const 
// karena tidak menggunakan melakukan inputan variable dinamis makanya digunakan const

//penerapan arrow function pada fungsi tanpa mendeklarasi parameter (default parameter)
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("#searchElement");
    const buttonSearchElement = document.querySelector("#searchButtonElement");
    const clubListElement = document.querySelector("#clubList");

    //penerapan arrow function pada fungsi tanpa mendeklarasi parameter (default parameter)

    //penerapan promise dengan async/await sehingga jika diterima menggunakan try sebaliknya catch
    // yang disesuaikan dengan fungsi sebelumnya
    const onButtonSearchClicked = async () => {
        try{
            const result = await DataSource.searchClub(searchElement.value);
            renderResult(result);
        } catch (message) { 
            fallbackResult(message)
        }
    };

    //penerapan arrow function stored in variable, maksudnya parameter pada fungsi
    const renderResult = results => {
        clubListElement.innerHTML = "";
        results.forEach(club =>  {
            //const name = club.name;
            //const fanArt = club.fanArt;
            //const description = club.description;

            //Destructuring Object dengan kaedah dari ES6
            const {name, fanArt, description} = club;

            const clubElement = document.createElement("div");
            clubElement.setAttribute("class", "club");

            //template literals menggunakan ` ` (backquote) dan untuk pengambilan data 
            // dideklarasikan dengan ${nama_data}

            clubElement.innerHTML = `<img class="fan-art-club" src="${fanArt}" alt="Fan Art">
                <div class="club-info">
                <h2>${name}</h2>
                <p>${description}</p>
                </div>`;
            clubListElement.appendChild(clubElement);
        })
    };

    //penerapan arrow function stored in variable, maksudnya parameter pada fungsi
    const fallbackResult = message => {
        clubListElement.innerHTML = "";
        clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`
    };

    buttonSearchElement.addEventListener("click", onButtonSearchClicked);
};

export default main;