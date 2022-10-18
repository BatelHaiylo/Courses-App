const BaseUsersApi = "https://my-json-server.typicode.com/Jeck99/fake-users-api/users"

export const getUsers = async() => {
    try{
        return await fetch(BaseUsersApi)
        .then(response => response.json())
        .then(response => {console.log(response)})
    }catch(error){alert(error)}
    finally{}
};