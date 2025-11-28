export function Element(tagName, attributes = {}, ...children) {
  const element = document.createElement(tagName); 

  const { textContent, innerHTML, onclick, disabled, ...restAttributes } = attributes;

  if (textContent) {
    element.textContent = textContent;
  }

  if (innerHTML) {
    element.innerHTML = innerHTML;
  }

  if (onclick) {
    element.onclick = onclick;
  }

  if (disabled) {
    element.disabled = true;
  }

  for (const key in restAttributes) {
    element.setAttribute(key, attributes[key]);
  }

  for (const child of children) {
    if (child) {
      element.append(child);
    }
  }

  return element;
}