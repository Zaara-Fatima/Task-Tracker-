import { TaskCard } from "./TaskCard";

export const TaskList = ({ tasks, onDelete, onEdit }) => {
  return (
    <div className="space-y-5">
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} onDelete={onDelete} onEdit={onEdit}/>
      ))}
    </div>
  );
};