import React, { forwardRef } from "react";
import { Button } from "react-bootstrap";

const forwardButtonRef = forwardRef((props, ref) => (
  <Button ref={ref} variant="primary" size="lg">
    Submit worker supply check
  </Button>
));

export default forwardButtonRef;
