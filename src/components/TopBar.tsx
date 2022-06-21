import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import {
  CAMPAIGN,
  toggleGoogle,
  toggleHubspot,
  togglePipe,
} from "../redux/slices/campaignSlice";
import { RootState } from "../redux/store";
import GoogleDrive from "../resources/google-drive.png";
import Hubspot from "../resources/hubspot.png";
import Pipedrive from "../resources/pipedrive.svg";
import SimpleButton from "./SimpleButton";

const CampaignBar = () => {
  const campaignState = useSelector((state: RootState) => state.campaign);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="pt-8 pl-8 flex space-x-8">
      {location.pathname !== "/settings" && (
        <>
          <SimpleButton
            text="Google Drive"
            isActive={campaignState.value === CAMPAIGN.GOOGLE}
            icon={<img src={GoogleDrive} alt="Google Drive" className="w-6" />}
            onClick={() => {
              dispatch(toggleGoogle());
              navigate(ROUTES.CAMPAIGN.GOOGLE_DRIVE);
            }}
          />
          <SimpleButton
            text="Hubspot"
            isActive={campaignState.value === CAMPAIGN.HUBSPOT}
            icon={<img src={Hubspot} alt="Google Drive" className="w-6" />}
            onClick={() => {
              dispatch(toggleHubspot());
              navigate(ROUTES.CAMPAIGN.HUBSPOT);
            }}
          />
          <SimpleButton
            text="Pipdrive"
            isActive={campaignState.value === CAMPAIGN.PIPE}
            icon={<img src={Pipedrive} alt="Google Drive" className="w-6" />}
            onClick={() => {
              dispatch(togglePipe());
              navigate(ROUTES.CAMPAIGN.PIPEDIRVE);
            }}
          />
        </>
      )}
    </div>
  );
};

export default CampaignBar;
