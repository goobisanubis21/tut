import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    saveUser: function (userData) {
        console.log(userData)
        return axios.post('api/user', userData)
    }
}