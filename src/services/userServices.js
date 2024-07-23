import axios from "axios";
const USER_BASE_URL = "http://localhost:8080/users";

class userServices {
  saveUser(user) {
    return axios.post(USER_BASE_URL, user);
  }
  getUser() {
    return axios.get(USER_BASE_URL);
  }

  getUserById(id) {
    return axios.get(USER_BASE_URL + "/" + id);
  }
  updateUser(user, id) {
    return axios.put(USER_BASE_URL + "/" + id, user);
  }
}
export default new userServices();
