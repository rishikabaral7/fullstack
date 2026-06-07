const URL = 'https://randomuser.me/api/?results=20';

const getUsers = async()=>{
    try{
        const response = await fetch(URL);
        const data = await response.json();
        return data.results;
    }
    catch(error){
        console.log(error);
    }
}

export {getUsers};