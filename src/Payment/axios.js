import axios from 'axios'

const instance = axios.create({
  baseURL: "http://localhost:5001/challange-5f99e/us-central1/api" // The API URL(cloud function)
})

export default instance