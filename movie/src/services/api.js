import axios from "axios";
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjA3MTJlNWY0M2VmY2Y3NzAxNTg0YmUzYTQ2MDFmMSIsInN1YiI6IjYxZjI2OWEzZTQ4ODYwMDA0Mjk2NTFhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lNudqg5i9VuB0p4YZ8TCz-7T16v5e14DKDwM6UNJv_w";
export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${token}`
    }
})