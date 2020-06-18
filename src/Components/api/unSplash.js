import axios from 'axios';

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers:{
        Authorization:'Client-ID 9549d049bc801af565db1fae6de3dbce08b11b8c9d475041a61aa781351cdaf3'
    }
})