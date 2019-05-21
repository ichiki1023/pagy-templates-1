import axios from 'axios'

const isServer = typeof window === 'undefined'
const clientApiHost = process.env.API_HOST
const serverApiHost = process.env.SERVER_API_HOST
const protocol = process.env.ENV !== 'production' ? 'http' : 'https'
const apiHost = isServer ? serverApiHost : clientApiHost

axios.defaults.baseURL = `${protocol}://${apiHost}`
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
