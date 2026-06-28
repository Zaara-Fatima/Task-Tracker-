import axios from "axios"

const taskApi = axios.create({
    baseURL:"https://task-tracker-phi-six-88.vercel.app/api/tasks",
})

export default taskApi
