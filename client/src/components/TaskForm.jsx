import { useState, useEffect } from "react";

export const TaskForm = ({onaddTask, editingTask,
    setEditingTask, onUpdateTask}) => {
  const [taskform, setTaskform] = useState({
    title: "",
    description: "",
    status: "Pending",
    priority: "Low",
    dueDate: "",
  });

  useEffect(() => {
    if (editingTask) {
        setTaskform({
            title: editingTask.title,
            description: editingTask.description,
            status: editingTask.status,
            priority: editingTask.priority,
            dueDate: editingTask.dueDate
                ? editingTask.dueDate.split("T")[0]
                : "",
        });
    }
}, [editingTask]);

  const handleChange=(e)=>{
    setTaskform({
        ...taskform,
        [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
  e.preventDefault();

  if(!taskform.title.trim()){
    alert("Title is required");
    return;
  }

    if (editingTask) {
    await onUpdateTask({
      ...taskform,
      _id: editingTask._id,
    });
  } else {
    await onAddTask(taskform);
  }

   setTaskform({
    title: "",
    description: "",
    status: "Pending",
    priority: "Low",
    dueDate: "",
  });

  setEditingTask(null);
};


  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-violet-400">Add New Task</h2>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Title */}

          <div>
            <label className="mb-2 block text-sm font-medium">Title</label>

            <input
            name="title"
              type="text"
              placeholder="Enter task title"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 outline-none transition focus:border-violet-500"
              value={taskform.title}
              onChange={
                handleChange
              }
            />
          </div>

          {/* Status */}

          <div>
            <label className="mb-2 block text-sm font-medium">Status</label>

            <select className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 outline-none focus:border-violet-500" value={taskform.status} onChange={handleChange} name="status">
              <option>Pending</option>
              <option>In-Progress</option>
              <option>Completed</option>
            </select>
          </div>
        </div>

        {/* Description */}

        <div>
          <label className="mb-2 block text-sm font-medium">Description</label>

          <textarea
          name="description"
            rows="4"
            placeholder="Enter task description"
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 outline-none focus:border-violet-500"
            value={taskform.description}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Priority */}

          <div>
            <label className="mb-2 block text-sm font-medium">Priority</label>

            <select className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 outline-none focus:border-violet-500" value={taskform.priority} onChange={handleChange} name="priority">
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          {/* Due Date */}

          <div>
            <label className="mb-2 block text-sm font-medium">Due Date</label>

            <input
              type="date"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 outline-none focus:border-violet-500"
              value={taskform.dueDate}
              onChange={handleChange}
              name="dueDate"
            />
          </div>
        </div>

        <button className="w-full rounded-lg bg-violet-600 py-3 font-semibold transition hover:bg-violet-700" type="submit">
         {editingTask ? "Update Task" : "Add Task"}
        </button>
      </form>
    </section>
  );
};
