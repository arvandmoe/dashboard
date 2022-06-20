import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Campaign from "./pages/Campaign";
import Settings from "./pages/Settings";
import Error from "./pages/Error";
import SideBar from "./components/SideBar";

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <div className="w-1/5">
          <div className="flex">
            <SideBar />
            <div className="bg-slate-100 w-1 h-screen" />
          </div>
        </div>
        <div className="w-4/5">
          <Routes>
            <Route path="/" element={<Campaign />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
