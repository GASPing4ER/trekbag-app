const item1 = {
  id: 1,
  name: "laptop",
  packed: true,
};

const item2 = {
  id: 2,
  name: "passport",
  packed: false,
};

const item3 = {
  id: 3,
  name: "phone charger",
  packed: false,
};

const item4 = {
  id: 4,
  name: "good mood",
  packed: true,
};

const initialItems = [item1, item2, item3, item4];

const secondaryButtons = [
  "Mark all as complete",
  "Mark all as incomplete",
  "Reset to initial",
  "Remove all items",
];

export { initialItems, secondaryButtons };
