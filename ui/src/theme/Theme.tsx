import React, { FunctionComponent } from "react";

import { ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

export const muiCache = createCache({
  key: "css",
  prepend: false,
});

const Theme: FunctionComponent = ({ children }) => {
  // region render

  return <CacheProvider value={muiCache}>{children}</CacheProvider>;

  // endregion render
};

export { Theme };
