import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CampaignBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import { ROUTES } from "./constants/routes";
import Campaign from "./pages/Campaign";
import Error from "./pages/Error";
import GoogleDrive from "./pages/GoogleDrive";
import HubSpot from "./pages/HubSpot";
import PipeDrive from "./pages/PipeDrive";
import Settings from "./pages/Settings";

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
          <div className="h-screen flex flex-col">
            <div className="div h-1/6">
              <CampaignBar />
            </div>
            <div className="div h-5/6 m-8">
              <Routes>
                <Route path="/" element={<Campaign />}>
                  <Route path={ROUTES.CAMPAIGN.GOOGLE_DRIVE} element={<GoogleDrive />} />
                  <Route path={ROUTES.CAMPAIGN.HUBSPOT} element={<HubSpot />} />
                  <Route path={ROUTES.CAMPAIGN.PIPEDIRVE} element={<PipeDrive />} />
                </Route>
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
