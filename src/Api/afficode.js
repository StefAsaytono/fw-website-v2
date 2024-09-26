import axios from "axios"

export default axios.create({
    baseURL: process.env.REACT_APP_AFFILIATE, 
    headers: {
        "x-api-key" : process.env.REACT_APP_OUTLET_KEY
    }
})