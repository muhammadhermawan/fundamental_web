//awalnya deklarasi variabel dengan var tetapi menyesuaikan standar ES6 jadi menggunakan const 
// karena tidak menggunakan melakukan inputan variable dinamis makanya digunakan const

//penerapan arrow function pada fungsi tanpa mendeklarasi parameter (default parameter)
import '../component/club-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    //const buttonSearchElement = document.querySelector("#searchButtonElement");
    const clubListElement = document.querySelector("club-list");

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
    //const renderResult = results => {
        //clubListElement.innerHTML = "";
        //results.forEach(club =>  {
            //const name = club.name;
            //const fanArt = club.fanArt;
            //const description = club.description;

            //Destructuring Object dengan kaedah dari ES6
            //const {name, fanArt, description} = club;

            //const clubElement = document.createElement("div");
            //clubElement.setAttribute("class", "club");

            //template literals menggunakan ` ` (backquote) dan untuk pengambilan data 
            // dideklarasikan dengan ${nama_data}

            //clubElement.innerHTML = `<img class="fan-art-club" src="${fanArt}" alt="Fan Art">
                //<div class="club-info">
                //<h2>${name}</h2>
                //<p>${description}</p>
                //</div>`;
            //clubListElement.appendChild(clubElement);
            //mengganti seluruh logika dikarenakan penulisan script nya sudah dilakukan
            // di club-list.js dan club-item.js

        //})
    //};
    const renderResult = results => {
        clubListElement.clubs = results;
    };

    const fallbackResult = message => {
        clubListElement.renderError(message);
    };

    //menggantikan logika dengan web component dari club-list.js dan club-item.js

    //penerapan arrow function stored in variable, maksudnya parameter pada fungsi
    //const fallbackResult = message => {
        //clubListElement.innerHTML = "";
        //clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`
    //};

    //buttonSearchElement.addEventListener("click", onButtonSearchClicked);
    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;