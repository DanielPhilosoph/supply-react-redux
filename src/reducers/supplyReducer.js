import uniqid from "uniqid";

import { initialSupply } from "../db/db";

export default function supplyReducer(state = initialSupply, action) {
  switch (action.type) {
    case "ADD_SUPPLY_ITEM":
      return [
        ...state,
        {
          id: uniqid(),
          currentAmount: action.payload.currentAmount,
          fullAmount: action.payload.fullAmount,
          supplyName: action.payload.supplyName,
          default: false,
        },
      ];
    case "EDIT_CURRENT_AMOUNT_SUPPLY_ITEM":
      return state.map((supplyItem) => {
        if (supplyItem.id === action.payload.id) {
          supplyItem.currentAmount = action.payload.currentAmount;
        }
        return supplyItem;
      });
    case "DELETE_SUPPLY_ITEM":
      return state.filter((supplyItem) => supplyItem.id !== action.payload.id);
    default:
      return state;
  }
}
