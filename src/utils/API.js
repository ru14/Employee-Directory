import axios from "axios";
const URL = "https://randomuser.me/api/?results=50&nat=us"

// Export an object containing methods we'll use for accessing the randon users API
export default {
    getRandomUser: function () {
        return axios.get(URL);
        }
}