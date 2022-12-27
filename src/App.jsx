//import { Transactions,Footer,Loader,Navbar,Services,Welcome, } from "./components"
import Transactions from "./components/Transactions";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";

function App() {
  

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />

      </div>
      <Transactions />
      <Footer />
      <Services />
  
    </div>
  );
}

export default App
