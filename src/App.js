import "./App.css";
import { AllRoutes } from "./routes/AllRoutes";
import { Header } from "./components/Layout/Header/Header";
import { FooterP } from "./components/Layout/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <AllRoutes />

      <FooterP />
    </div>
  );
}

export default App;
