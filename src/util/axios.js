import axios from 'axios'

const instance=axios.create({
    baseURL:'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public'
})

export default instance