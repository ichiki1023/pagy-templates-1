import axios from 'axios'

const isServer = typeof window === 'undefined'
const clientApiUrl = process.env.CLIENT_API_URL
const serverApiUrl = process.env.SERVER_API_URL
const apiUrl = isServer ? serverApiUrl : clientApiUrl

axios.defaults.baseURL = apiUrl
axios.defaults.timeout = 5000

// Add a request interceptor
axios.interceptors.request.use(request => {
  const { baseURL, url, method } = request
  const params = request.params ? request.params : {}
  const msg = `[Request] ${method.toUpperCase()}  ${baseURL}/${url} ${JSON.stringify(
    params
  )}`
  console.debug(msg)
  return request
})

// Add a response interceptor
axios.interceptors.response.use(response => {
  const {
    status,
    statusText,
    config: { method, url }
  } = response
  const msg = `[Response] ${method.toUpperCase()} ${status}:${statusText} ${url}`
  console.debug(msg)
  return response
})

export default axios
