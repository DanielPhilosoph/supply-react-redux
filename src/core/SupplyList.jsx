import React from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";

import { useSelector } from "react-redux";
import SupplyTr from "./SupplyTr";

export default function SupplyList() {
  const state = useSelector((state) => state.supply);
  let defaultSupplyIdArray = state.map(
    (defaultSupplyItem) => defaultSupplyItem.id
  );
  const [supplyDefault, setSupplyDefault] = useState(defaultSupplyIdArray);

  // TODO check if any of the new supply is in this array and if not add delete button
  // TODO implement delete button functionality with DELETE_SUPPLY_ITEM from reducer
  // TODO Add db folder with the initial supply data

  return (
    <div className="supplyList">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Supply name</th>
            <th>Full amount</th>
            <th>Current amount</th>
            <th>Missing</th>
          </tr>
        </thead>
        <tbody>
          {state.map((supplyItem, i) => {
            return (
              <SupplyTr
                key={"supplyItem" + i + 1}
                index={i + 1}
                supply={supplyItem}
              />
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
