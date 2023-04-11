import { Box } from "@mui/material";
import Header from "./components/Header/Header";
import TrustedBy from "./components/TrustedBy/TrustedBy";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import SellingProposition from "./components/SellingProposition/SellingProposition";
import Footer from "./components/Footer/Footer";
import MarketPlace from "./components/MarketPlace/MarketPlace";
import FiverBusiness from "./components/FiverBusiness/FiverBusiness";
import SwipableTestomonial from "./components/Testimonial/SwipableTestomonial";
import LogoMaker from "./components/LogoMaker/LogoMaker";
import FindTalent from "./components/FindTalent/FindTalent";

function App() {
  return (
    <Box>
      <Navbar />
      <Header />
      <TrustedBy />
      <Services/>
      <SellingProposition/>
      <MarketPlace/>
      <FiverBusiness/>
      <SwipableTestomonial/>
      <LogoMaker/>
      <FindTalent/>
      <Footer/>
    </Box>
  );
}

export default App;
