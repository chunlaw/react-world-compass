import { Box, SxProps, Theme } from "@mui/material";

const Footer = () => {
  return <Box sx={rootSx}>MIT License by Chun Law</Box>;
};

export default Footer;

const rootSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
