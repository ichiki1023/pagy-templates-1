import axios from 'axios'

const apiHost = process.env.API_HOST

axios.defaults.baseURL = `http://${apiHost}`
axios.defaults.timeout = 5000

export default axios
