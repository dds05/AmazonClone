import axios from 'axios';

const instance=axios.create({
    baseURL:'http://localhost:5001/challenge-96dbb/us-central1/api' // THE API URL (cloud fn)
  
});


export default instance;