import axios from 'axios'


const URL="http://localhost:8081/user"

class UserFunctions
{

    login(UserEmailPass) 
    {
       return axios.post(URL+'/login',UserEmailPass)
    }   

    registerParent(User)
    {
        return axios.post(URL+'/userregister',User)
    }

    registerAdmin(User)
    {
        return axios.post(URL+'/adminregister',User)
    }

    changePassword(UserEmailPass)
    {
        return axios.post(URL+'/changepassword',UserEmailPass)
    }

    updateprofile(UserEmailPass)
    {
        return axios.put(URL+'/2',UserEmailPass)
    }
}

export default new UserFunctions();
