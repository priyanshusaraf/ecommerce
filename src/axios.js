import axios from "axios";

const instance = axios.create({
  baseURL: "https://damp-oasis-54508.herokuapp.com/v1"
})

export default instance;