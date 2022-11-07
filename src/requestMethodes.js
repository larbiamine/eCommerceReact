import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjkxYzFiMDA4Nzk4MWY2NDVkYTA0MCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Njc4MzI4NzAsImV4cCI6MTY2ODA5MjA3MH0.sWU8ANhfZH9qiG6EYGiaCS6o2XcIos_4ZkLw8pBDJdw";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});