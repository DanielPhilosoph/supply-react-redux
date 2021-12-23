const initialSupply = [
  {
    currentAmount: 0,
    fullAmount: 10,
    supplyName: "Blood tests",
  },
  {
    currentAmount: 0,
    fullAmount: 13,
    supplyName: "Covid-19 tests",
  },
];

export default function supplyReducer(state = initialSupply, action) {
  switch (action.type) {
    case "ADD_SUPPLY_ITEM":
      return [
        ...state,
        {
          currentAmount: action.payload.currentAmount,
          fullAmount: action.payload.fullAmount,
          supplyName: action.payload.supplyName,
        },
      ];
    case "SUBMIT_FORM":
      return action.payload.supply;
    default:
      return state;
  }
}
