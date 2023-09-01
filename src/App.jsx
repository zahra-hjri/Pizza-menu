import "./index.css";

import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="mx-auto text-center">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

export default App;
