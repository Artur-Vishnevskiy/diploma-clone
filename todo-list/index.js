import { Element } from "./scripts/lib/Element.js";
import { renderTasks } from "./scripts/render.js";
import { Header } from "./scripts/components/Header.js";
import { Footer } from "./scripts/components/Footer.js";
import {
  tasks,
  addTask,
  deleteTask,
} from "./scripts/state/taskList.js";

const ROOT = document.getElementById("root");

const MainContainer = new Element("main", {
  id: "main",
});

function renderMainContainer() {
  MainContainer.innerHTML = "";
  MainContainer.append(...renderTasks(tasks));
}

const fragment = document.createDocumentFragment();
fragment.append(
  Header(onSubmitForm),
  MainContainer,
  Footer()
);

ROOT.append(fragment);

function onSubmitForm(values) {
  addTask(values);
  renderMainContainer();
}

function onDelete(cardId) {
  deleteTask(cardId);
  renderMainContainer();
}

function onComplete(cardId) {
  completeTask(cardId);
  renderMainContainer();
}

function handleCardClick(event) {
  const btn = event.target.closest("[data-action]");

  if (!btn) return;

  const action = btn.getAttribute("data-action");
  const cardId = btn.getAttribute("data-id");

  if (action === "complete") {
    onComplete(cardId);
  }

  if (action === "delete") {
    onDelete(cardId);
  }
}

MainContainer.addEventListener("click", handleCardClick);

(() => {
  renderMainContainer();
})();