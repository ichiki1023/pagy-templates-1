import axios from 'axios'
import getConfig from 'next/config'

const publicRuntimeConfig = getConfig().publicRuntimeConfig
const apiHost = publicRuntimeConfig.apiHost

axios.defaults.baseURL = `http://${apiHost}`
axios.defaults.timeout = 5000

export default axios
