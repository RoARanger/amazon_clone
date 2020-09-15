import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'http://localhost:5001/clone-73b8c/us-central1/api'
    //http://http://localhost:5001/clone-73b8c/us-central1/api
});

export default instance;


