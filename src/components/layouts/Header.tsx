import {
  Box,
  Button,
  IconButton,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import { GitHub as GitHubIcon } from "@mui/icons-material";
import npmLogo from "../../assets/npm.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Box sx={rootSx}>
      <Typography
        variant="h6"
        onClick={() => navigate("/")}
        sx={{ cursor: "pointer" }}
      >
        React World Compass
      </Typography>
      <Box>
        <Button
          variant="text"
          sx={{ textTransform: "none" }}
          onClick={() =>
            window.open(
              "https://github.com/chunlaw/react-world-compass/blob/demo/src/components/Compass.tsx",
              "_blank"
            )
          }
          color="inherit"
        >
          <Typography variant="body1">Sample code</Typography>
        </Button>
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
        <IconButton
          onClick={() => {
            window.open(
              "https://www.npmjs.com/package/react-world-compass",
              "_blank"
            );
          }}
          size="small"
        >
          <img src={npmLogo} width={24} height={24} alt="NPM logo" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;

const rootSx: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  gap: 1,
  width: "100%",
  px: 2,
};
