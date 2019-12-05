import axios from "axios";

var url = "http://localhost:3005";

export function loginUser(data) {
  return axios.post(url + "/users/login", data);
}
export function register(data) {
  return axios.post(url + "/users/register", data);
}
export function forgotPassword(data) {
  return axios.post(url + "/users/forgotPassword", data);
}
export function resetPassword(data, token) {
  return axios.post(url + "/users/resetPassword", data, {
    headers: {
      token: token
    }
  });
}

export function getAllUser() {
  let token = localStorage.getItem("token");
  return axios.get(
    url + "/users/allUsers",
    {
      headers: {
        token: token
      }
    }
  );
}


