import axios from "axios"

const taskApi = axios.create({
    baseURL:"https://task-tracker-chi-bice.vercel.app/api/tasks",
})

export default taskApi
