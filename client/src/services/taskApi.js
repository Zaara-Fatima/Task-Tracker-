import axios from "axios"

const taskApi = axios.create({
    baseURL:"http://localhost:3000/api/tasks",
})

export default taskApi