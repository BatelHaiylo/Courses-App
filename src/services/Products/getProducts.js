const BaseProductsApi = "https://my-json-server.typicode.com/Jeck99/fake-data-api/data"

export const getProduct = async() => {
    try{
        return await fetch(BaseProductsApi)
        .then(response => response.json())
        .then(response => console.log(response))
    }catch(error){alert(error)}
    finally{}
};

// async getMovie(){
//     try{
//       document.getElementById('movie_page').innerHTML = 
//       `<div id= "loading_containet" style="min-height: 100vh;"><img src="https://c.tenor.com/QJNoPeq9WmUAAAAC/netflix-intro-netflix.gif" class="d-flex justify-content-center  align-items-center pt-5";"></div>`
//         return await fetch(`${this.url},${this.objOption}`)
//         .then(data => data.json())
//     } catch(error){this.error(error)}
//     finally{ document.getElementById('loading_containet').innerHTML =" "}