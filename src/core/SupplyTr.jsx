import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { deleteItem, editCurrentAmount } from "../helpers/actions";

import { validateCurrentAmount } from "../helpers/functions";

export default function SupplyTr({ index, supply, deleteButtonDisplay }) {
  const currentAmount = useRef();
  const dispatch = useDispatch();

  const onBlur = () => {
    const response = validateCurrentAmount(
      currentAmount.current.value,
      supply.fullAmount
    );
    if (response.valid) {
      dispatch(editCurrentAmount(supply.id, currentAmount.current.value));
    } else {
      currentAmount.current.value = supply.currentAmount;
    }
  };

  const onDeleteClick = () => {
    dispatch(deleteItem(supply.id));
  };

  return (
    <tr>
      <td>{index}</td>
      <td>
        {supply.supplyName}
        <span
          className="deleteButtonSpan"
          style={{ display: deleteButtonDisplay ? "none" : "block" }}
        >
          <button
            className="deleteButton"
            type="button"
            onClick={onDeleteClick}
          >
            Delete
          </button>
        </span>
      </td>
      <td>{supply.fullAmount}</td>
      <td>
        <input
          ref={currentAmount}
          className="listInput"
          type="number"
          defaultValue={supply.currentAmount}
          onBlur={onBlur}
        ></input>
      </td>
      <td>{supply.fullAmount - supply.currentAmount}</td>
    </tr>
  );
}
