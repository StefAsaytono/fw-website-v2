import axios from "axios";

export default axios.create({
    baseURL: process.env.REACT_APP_SMS,
    params: {
        'apiKey' : process.env.REACT_APP_SMS_KEY, 
        'apiSecret' : process.env.REACT_APP_SMS_SECRET
    }, 
    headers: {
        // 'apiKey' : process.env.REACT_APP_SMS_KEY, 
        // 'apiSecret' : process.env.REACT_APP_SMS_SECRET
        'Content-Type': 'application/json'
    }
})