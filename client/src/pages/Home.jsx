import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { TaskForm } from "../components/TaskForm";
import { TaskList } from "../components/TaskList";
import taskApi from "../services/taskApi";

export const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const navigate = useNavigate();

  const addtasks = async (taskData) => {
    try {
      const { data } = await taskApi.post("/tasks", taskData);
      setTasks((prevTasks) => [...prevTasks, data]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchtasks = async () => {
    try {
      const response = await taskApi.get("/tasks");
      setTasks(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (updatedTask) => {
    try {
      const { data } = await taskApi.put(
        `/tasks/${updatedTask._id}`,
        updatedTask
      );

      setTasks((prevTasks) =>
        prevTasks.map((task) => (task._id === data._id ? data : task))
      );

      setEditingTask(null);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await taskApi.delete(`/tasks/${id}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  // 🔑 Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token"); // clear JWT or session token
    navigate("/login"); // redirect to login page
  };

  useEffect(() => {
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/login"); // redirect if not logged in
    return;
  }
  fetchtasks();
}, [navigate]);


  return (
    <main className="min-h-screen bg-[#0f1117] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">Task Tracker</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-semibold"
          >
            Logout
          </button>
        </div>

        <div className="mt-10">
          <TaskForm
            onaddTask={addtasks}
            onUpdateTask={updateTask}
            editingTask={editingTask}
            setEditingTask={setEditingTask}
          />
        </div>

        <div className="mt-10">
          <TaskList
            tasks={tasks}
            onDelete={deleteTask}
            onEdit={setEditingTask}
          />
        </div>
      </div>
    </main>
  );
};
