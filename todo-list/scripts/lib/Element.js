export function Element(tagName, attibutes, ...children) {
  this.element = document.createElement(tagName);

  const { textContent, innerHTML, onclick, ...restAttributes } = attibutes;

  if (textContent) {
    this.element.textContent = textContent;
  }

  if (innerHTML) {
    this.element.innerHTML = innerHTML;
  }

  if (onclick) {
    this.element.onclick = onclick;
  }
  for (const key in restAttributes) {
    this.element.setAttribute(key, attibutes[key]);
  }

  for (const child of children) {
    if (child) {
      this.element.append(child);
    }
  }

  return this.element;
}