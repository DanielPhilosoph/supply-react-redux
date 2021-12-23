import React from "react";
import { Button } from "react-bootstrap";

export default function SubmitButton() {
  return (
    <div className="submitButtonDiv">
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg">
          Submit worker supply check
        </Button>
      </div>
    </div>
  );
}
