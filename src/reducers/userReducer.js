const user = {
  name: "",
  company: "",
  date: "",
};

export default function usersReducer(state = user, action) {
  switch (action.type) {
    case "SUBMIT_FORM":
      const updatedUser = {
        name: action.payload.name,
        company: action.payload.company,
        date: action.payload.date,
      };
      return updatedUser;

    default:
      return state;
  }
}
