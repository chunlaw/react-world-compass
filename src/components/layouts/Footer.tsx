import { GitHub as GitHubIcon } from "@mui/icons-material";
import { Box, IconButton, SxProps, Theme } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={rootSx}>
      <IconButton
        onClick={() => {
          window.open(
            "https://github.com/chunlaw/react-world-compass",
            "_blank"
          );
        }}
        size="small"
      >
        <GitHubIcon />
      </IconButton>
    </Box>
  );
};

export default Footer;

const rootSx: SxProps<Theme> = {
  height: 50,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
