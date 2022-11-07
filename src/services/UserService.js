import axios from 'axios';

const USER_API_BASE_URL = "http://127.0.0.1:5000/user";
 
class UserService {
 
    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }
 
    createUser(user){
        return axios.post(USER_API_BASE_URL, user);
    }
 
    getUserById(userId){
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }
 
    updateUser(user, userId){
        return axios.put(USER_API_BASE_URL + '/' + userId, user);
    }
 
    deleteUser(userId){
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }
}
 
export default new UserService()