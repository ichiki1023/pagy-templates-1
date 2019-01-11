import axios from 'axios'
import getConfig from 'next/config'

const publicRuntimeConfig = getConfig().publicRuntimeConfig

axios.defaults.baseURL = `http://${publicRuntimeConfig.apiHost}`
axios.defaults.timeout = 5000

export default axios
