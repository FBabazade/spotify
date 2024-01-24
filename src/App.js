import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col overflow-hidden justify-between ">
          <div className="wrapper">
            <Sidebar />
            <Content />
          </div>
          <div className="relative"><Footer/></div>
        </div>
      </Router>
    </>
  );
}

export default App;
