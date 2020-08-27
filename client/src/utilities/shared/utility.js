export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const data = [
  { id: 1, task: "I have to complete it." },
  { id: 2, task: "Do the chores of house." },
];
