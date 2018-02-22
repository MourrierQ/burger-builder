import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-redux-my-burger.firebaseio.com/"
});

export default instance;
