const BaseProductsApi = "https://my-json-server.typicode.com/BatelHaiylo/Courses-data/courses"

export const getCourses = async() => {
    try{
        return await fetch(BaseProductsApi)
        .then(response => response.json())
    }catch(error){alert(error)}
    finally{}
};
