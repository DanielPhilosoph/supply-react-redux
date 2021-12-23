export function submitForm(name, company, date) {
  return {
    type: "SUBMIT_FORM",
    payload: {
      name: name,
      company: company,
      date: date,
    },
  };
}

export function editCurrentAmount(id, currentAmount) {
  return {
    type: "EDIT_CURRENT_AMOUNT_SUPPLY_ITEM",
    payload: { id: id, currentAmount: currentAmount },
  };
}

export function addSupplyItem(supplyName, fullAmount, currentAmount) {
  return {
    type: "ADD_SUPPLY_ITEM",
    payload: {
      supplyName: supplyName,
      fullAmount: fullAmount,
      currentAmount: currentAmount,
    },
  };
}
