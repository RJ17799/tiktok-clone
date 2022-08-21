import axios from "axios";
const base_url = "https://tiktok-clone-backend91.herokuapp.com"
const instance = axios.create({
    baseURL: base_url
})
export default instance