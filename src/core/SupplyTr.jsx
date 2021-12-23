import React from "react";

export default function SupplyTr({ index, supply }) {
  return (
    <tr>
      <td>{index}</td>
      <td>{supply.supplyName}</td>
      <td>{supply.fullAmount}</td>
      <td>{supply.currentAmount}</td>
      <td>{supply.fullAmount - supply.currentAmount}</td>
    </tr>
  );
}
