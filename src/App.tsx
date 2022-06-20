import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Campaign from "./pages/Campaign";
import Settings from "./pages/Settings";
import Error from "./pages/Error";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="flex h-screen">
      <div className="w-1/5">
        <SideBar />
      </div>
      <div className="w-4/5">
        <Router>
          <Routes>
            <Route path="/" element={<Campaign />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
