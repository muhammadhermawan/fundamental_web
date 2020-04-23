function covid() {

        const baseUrl = "https://corona.lmao.ninja";
    
        const getData = async () => {
            try {
                const response = await fetch(`${baseUrl}/v2/countries/indonesia`);
                const responseJson = await response.json();
                if(responseJson.error) {
                    showResponseMessage(responseJson.message);
                } else {
                    showAllData(responseJson.data);
                }
            }
            catch(error) {
                showResponseMessage(error);
            }
        };
    
        //const renderAllData = (data) => {
            //const listDataElement = document.querySelector("#listData");
            //listBookElement.innerHTML = `
            
    
}

export default covid;    