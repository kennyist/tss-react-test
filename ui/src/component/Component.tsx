import React, { FunctionComponent } from "react";
import { Button } from "@mui/material";

import styles from "./styles";

const Component: FunctionComponent = () => {
  const { classes } = styles();

  // region render

  return (
    <Button className={classes.root} color={"primary"} variant={"contained"}>
      test button
    </Button>
  );

  // endregion render
};

export default Component;
export { Component };
