import axios from "axios";
export default axios.create({
// 待修改
  baseURL: "http://localhost:8080",
  headers: {
    "Content-type": "application/json"
  }
});