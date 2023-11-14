import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <Box height="100dvh" width="100dvw" display="flex" flexDirection="column">
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Layout;