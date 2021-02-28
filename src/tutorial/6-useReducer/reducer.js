export const reducer = (state, action) => {
  if (action.type === "ADD_PEOPLE") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "item added",
    };
  } else if (action.type === "NO_VALUE") {
    return { ...state, isModalOpen: true, modalContent: "Please enter value" };
  } else if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOPen: false };
  } else if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return { ...state, people: newPeople };
  }
  throw new Error(`No action type found ${action.type}`);
};
