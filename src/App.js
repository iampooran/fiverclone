import { Box } from "@mui/material";
import Header from "./components/Header/Header";
import TrustedBy from "./components/TrustedBy/TrustedBy";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import SellingProposition from "./components/SellingProposition/SellingProposition";

function App() {
  return (
    <Box>
      <Navbar />
      <Header />
      <TrustedBy />
      <Services/>
      <SellingProposition/>
    </Box>
  );
}

export default App;
