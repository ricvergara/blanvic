import axios from "axios";

const BASE_URL= "http://localhost:5000/api";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzE0NjY3MjYxOGUxZDA4MTBkMTgzYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Mzc5NDkzNiwiZXhwIjoxNjU0MDU0MTM2fQ.4HTzKy82Nib65VXEoLfUNdwKNPK1Uldgmkb2iIcXsWs"


export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
});