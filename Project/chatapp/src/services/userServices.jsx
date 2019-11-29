import axios from "axios";
import { func } from "prop-types";
var address = "http://localhost:3005";

export function loginUser(loginData) {
  return axios.post(address + "/users/login", loginData);
}
export function register(regData)
{
  return axios.post(address + "/users/register", regData);
}