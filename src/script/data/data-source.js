/*function DataSource(onSuccess, onFailed) {
    this.onSuccess = onSuccess;
    this.onFailed = onFailed;
} */

//Penerapan penulisan class pada ES6 pada function DataSource beserta method nya

//penerapan pengaksesan langsung ke class dengan method static
//penerapan promise dengan jika data berhasil diproses maka dilakukan fungsi resolve
//dan jika data gagal diproses maka menjalankan fungsi reject

import clubs from './clubs.js';

class DataSource {
    static searchClub (keyword) {
        return new Promise ((resolve, reject) => {
            const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));

            if (filteredClubs.length) {
                resolve(filteredClubs);
            } else {
                reject(`${keyword} is not found`);
            }
        });
        
    }
}

export default DataSource;
//template literals menggunakan ` ` (backquote) dan untuk pengambilan data 
// dideklarasikan dengan ${nama_data}

/* DataSource.prototype.searchClub = function (keyword) {
    //penerapan arrow function stored in variable, maksudnya parameter pada fungsi
    const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));

    if (filteredClubs.length) {
        this.onSuccess(filteredClubs);
    } else {
        this.onFailed(`${keyword}  is not found`);
    }
}; */

