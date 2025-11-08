import { storage } from "../services/storage.js";

export let tasks = storage.load();

export function addTask(task) {
  const newTask = {
    id: Date.now(),
    task: task.task,
    taskValue: task.taskValue,
    date: new Date().toLocaleDateString(),
  };

  tasks.push(newTask);
  storage.save(tasks);
}

export function deleteTask(taskId) {
  const index = tasks.findIndex((t) => String(t.id) === taskId);
  tasks.splice(index, 1);
  storage.save(tasks);
}

window.addEventListener("storage", (event) => {
  if (event.key === STORAGE_KEY) {
    tasks = storage.load();
    renderMainContainer();
  }
});