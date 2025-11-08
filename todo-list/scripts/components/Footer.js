import { Element } from "../lib/Element.js";

export const Footer = () =>
  new Element(
    "div",
    {
      id: "footer",
    },
    new Element("div", {
      id: "copyright",
      innerHTML: `&copy; ${new Date().getFullYear()}`,
    }),
    new Element("div", {
      id: "version",
      textContent: "v1.0.0",
    })
  );