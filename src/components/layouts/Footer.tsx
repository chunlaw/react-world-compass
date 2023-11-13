import { GitHub as GitHubIcon } from "@mui/icons-material";
import { Box, IconButton, SxProps, Theme } from "@mui/material";
import npmLogo from "../../assets/npm.svg";

const Footer = () => {
  return (
    <Box sx={rootSx}>
      <IconButton
        onClick={() => {
          window.open("https://www.npmjs.com/package/react-world-compass", "_blank");
        }}
        size="small"
      >
        <img src={npmLogo} width={24} height={24} alt="NPM logo" />
      </IconButton>
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
