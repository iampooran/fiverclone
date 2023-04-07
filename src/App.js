import { Box } from "@mui/material";
import Header from "./components/Header/Header";
import TrustedBy from "./components/TrustedBy/TrustedBy";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Box>
      <Navbar />
      <Header />
      <TrustedBy />
    </Box>
  );
}

export default App;
