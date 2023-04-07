import { Box } from "@mui/material";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return <Box sx={{background:"green"}}>
  <Navbar/>
  <Header/>
  </Box>;
}

export default App;
