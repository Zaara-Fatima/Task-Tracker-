export const TaskCard = ({ task, onDelete, onEdit }) => {
  return (
    <div className="rounded-2xl bg-[#1a1d26] p-5">
      <h3 className="text-xl font-semibold">{task.title}</h3>

      <p className="mt-2 text-gray-400">{task.decription}</p>

      <div className="mt-5 flex flex-wrap gap-3">
        <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-sm text-yellow-400">
          {task.status}
        </span>

        <span className="rounded-full bg-red-500/20 px-3 py-1 text-sm text-red-400">
          {task.priority}
        </span>

        {task.dueDate
          ? new Date(task.dueDate).toLocaleDateString()
          : "No Due Date"}
      </div>

      <div className="mt-6 flex justify-end gap-3">
        <button className="rounded-lg border border-violet-500 px-4 py-2" onClick={()=>onEdit(task)}>
          Edit
        </button>

        <button className="rounded-lg border border-red-500 px-4 py-2" onClick={()=>onDelete(task._id)}>
          Delete
        </button>
      </div>
    </div>
  );
};
