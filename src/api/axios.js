import axios from 'axios'

const instance = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true, // necesario para que mande cookies
})

export default instance
