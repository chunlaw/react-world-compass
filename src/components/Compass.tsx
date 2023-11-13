import { Box, Typography } from "@mui/material";
import useCompass from "react-world-compass";

const Compass = () => {
  const deg = useCompass();

  return (
    <Box flex="1" display="flex" alignItems="center" justifyContent="center">
      {deg === null && (
        <Typography>Device not supported, try it on mobile device.</Typography>
      )}
      {deg !== null && (
        <Box
          sx={{
            backgroundImage: "url(/compass.svg)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            transform: `rotate(${deg?.toFixed(1)}deg)`,
            height: "min(100dvw, 100dvh)",
            width: "min(100dvw, 100dvh)",
          }}
        />
      )}
    </Box>
  );
};

export default Compass;
