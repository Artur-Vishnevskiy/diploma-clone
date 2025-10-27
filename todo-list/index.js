const ROOT = document.getElementById("root");

function Element(tagName, attibutes) {
    this.element = document.createElement(tagName);

    const { textContent, innerHTML, ...restAttributes } = attibutes;

    if (textContent) {
    this.element.textContent = textContent;
  }

  if (innerHTML) {
    this.element.innerHTML = innerHTML;
  }

  for (const key in restAttributes) {
    this.element.setAttribute(key, attibutes[key]);
  }

  return this.element;
}

const HEADER_ELEMENT = new Element("header", {id: "header", class: "header"} );
const buttonDeleteAll = new Element("button", {
    id: "button",
    textContent: "Delete All",
});
HEADER_ELEMENT.append(buttonDeleteAll);
const headerForm = new Element("form", {id: "header-form"});
headerForm.append(buttonDeleteAll);
HEADER_ELEMENT.append(headerForm);
const inputTodo = new Element("input", {
    type: "text",
    id: "todo-input",
    placeholder: "Enter todo...",
});
headerForm.append(inputTodo);
const buttonAdd = new Element("button", {
    id: "button",
    textContent: "Add",
});
headerForm.append(buttonAdd);

const fragment = document.createDocumentFragment();
fragment.append(
  HEADER_ELEMENT,
);

ROOT.append(fragment);