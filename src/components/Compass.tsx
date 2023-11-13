import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import useCompass, { requestPermission, isSafari } from "react-world-compass";

const CompassWrapper = () => {
  const [permission, setPermission] = useState("default");

  const handleClick = () => {
    requestPermission().then((_permission) => {
      setPermission(_permission);
    });
  };

  if (isSafari && permission !== "granted") {
    return (
      <Box flex="1" display="flex" alignItems="center" justifyContent="center">
        <Button variant="contained" onClick={handleClick}>
          Request Device Permission
        </Button>
      </Box>
    );
  }
  return <Compass />;
};

const Compass = () => {
  const compass = useCompass(100);

  return (
    <Box
      flex="1"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      {compass === null && (
        <Typography>Device not supported, try it on mobile device.</Typography>
      )}
      {compass !== null && (
        <>
          <Box
            sx={{
              backgroundImage: "url(/compass.svg)",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              transform: `rotate(${compass.degree?.toFixed(3)}deg)`,
              height: "min(100dvw, 100dvh)",
              width: "min(100dvw, 100dvh)",
              transition: "transform 0.2s ease-out",
            }}
          />
          <Typography variant="subtitle1">
            Degree: {compass.degree.toFixed(2)} ±{compass.accuracy.toFixed(2)}
          </Typography>
        </>
      )}
    </Box>
  );
};

export default CompassWrapper;
