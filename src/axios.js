import axios from "axios";
const instance = axios.create({
  baseURL: "http://webicoun-backend-hajkn.run-ap-south1.goorm.io/",
});
export default instance;
