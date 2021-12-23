import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { editCurrentAmount } from "../helpers/actions";

import { validateCurrentAmount } from "../helpers/functions";

export default function SupplyTr({ index, supply }) {
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

  return (
    <tr>
      <td>{index}</td>
      <td>{supply.supplyName}</td>
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
