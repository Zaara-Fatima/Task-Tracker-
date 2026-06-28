import React from "react";
import { useState } from "react";

import { TaskForm } from "../components/TaskForm";
import { TaskList } from "../components/TaskList";
import taskApi from "../services/taskApi";
import { useEffect } from "react";

export const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addtasks = async (taskData) => {
    try {
      const { data } = await taskApi.post("/", taskData);
      setTasks((prevTasks) => [...prevTasks, data]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchtasks = async () => {
    try {
      const response = await taskApi.get("/");
      setTasks(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (updatedTask) => {
  try {
    const { data } = await taskApi.put(
      `/${updatedTask._id}`,
      updatedTask
    );

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === data._id ? data : task
      )
    );

    setEditingTask(null);
  } catch (error) {
    console.error(error);
  }
};

  const deleteTask = async (id) => {
    try {
      await taskApi.delete(`/${id}`);

      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchtasks();
  }, []);
  return (
    <main className="min-h-screen bg-[#0f1117] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <h1 className="text-center text-4xl font-bold">Task Tracker</h1>

        <div className="mt-10">
          <TaskForm
            onaddTask={addtasks}
            onUpdateTask={updateTask}
            editingTask={editingTask}
            setEditingTask={setEditingTask}
          />
        </div>

        <div className="mt-10">
          <TaskList tasks={tasks} onDelete={deleteTask}  onEdit={setEditingTask}/>
        </div>
      </div>
    </main>
  );
};
