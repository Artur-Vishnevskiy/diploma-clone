import { Element } from "../lib/Element.js";
import { Form } from "./Form.js";

export const Header = (onSubmit) => {
  return new Element(
    "header",
    {
      id: "header",
      class: "header",
    },
    Form(onSubmit),
  );
};