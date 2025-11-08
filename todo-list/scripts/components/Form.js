import { Element } from "../lib/Element.js";

function renderForm(onSubmit) {
  const searchForm = new Element(
    "form",
    { id: "search-form" },
    new Element("input", {
      placeholder: "Input todo...",
      type: "text",
      name: "task",
    }),
    new Element("button", {
      textContent: "Add",
      type: "submit",
    })
  );

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const task = formData.get("task");

    onSubmit({ task });
    searchForm.reset();
  });

  return searchForm;
}

export const Form = renderForm;