import { CARD_ELEMENT } from "./components/Card.js";

export function renderTasks(tasks) {
  const tasksElements = tasks.map((task) => CARD_ELEMENT(task));

  return tasksElements;
}