import { Element } from "../lib/Element.js";

function renderCard(cardInfo) {
  const {
    date,
    task,
  } = cardInfo;

  const CARD_HEADER = new Element("div", {
    class: "header",
  });

  const CARD_SUBTITLE = new Element("h3", {
    class: "subtitle",
    textContent: date,
  });
  const CARD_TITLE = new Element("h2", {
    class: "title",
    textContent: task,
  });

  const COMPLETE_BUTTON = new Element("button", {
    class: "complete-button",
    textContent: cardInfo.isComplete ? "❤️" : "🤍",
    "data-action": "complete",
    "data-id": cardInfo.id,
  });

  const DELETE_BUTTON = new Element("button", {
    class: "delete-button",
    textContent: "delete",
    "data-action": "delete",
    "data-id": cardInfo.id,
  });

  const BUTTONS = new Element(
    "div",
    {
      class: "buttons",
    },
    DELETE_BUTTON,
    COMPLETE_BUTTON
  );

  const CARD_FRAGMENT = document.createDocumentFragment();

  CARD_FRAGMENT.append(
    CARD_HEADER,
    CARD_SUBTITLE,
    CARD_TITLE,
    BUTTONS
  );

  const CARD = new Element("div", { class: "card" }, CARD_FRAGMENT);

  return CARD;
}

export const CARD_ELEMENT = renderCard;