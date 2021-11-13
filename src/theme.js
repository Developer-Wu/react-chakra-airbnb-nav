import { extendTheme } from "@chakra-ui/react";
import { mode, createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  base: "0px",
  xs: "43rem",
  sm: "45rem",
  md: "62rem",
  lg: "81.25rem",
  xl: "100rem",
});

const theme = extendTheme({
  breakpoints,
});

export default theme;
