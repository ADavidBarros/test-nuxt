import axios from 'axios'

// import NProgress from 'nprogress' // <--- Import the library

const apiClient = axios.create({
  baseURL: `https://my-json-server.typicode.com/ADavidBarros/test-nuxt/`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

// apiClient.interceptors.request.use((config) => {
//   // Called on request
//   NProgress.start()
//   return config
// })
// apiClient.interceptors.response.use((response) => {
//   // Called on response
//   NProgress.done()
//   return response
// })

export default {
  getEvents(perPage = 6, page = 1) {
    return apiClient.get(
      '/events?_limit=' + perPage + '&_page=' + page + '&_sort=id&_order=desc'
    )
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  },
  postEvent(event) {
    return apiClient.post('/events', event)
  }
}
