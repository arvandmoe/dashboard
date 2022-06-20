import { faBullhorn, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import {
  SIDEBAR,
  toggleCampaign,
  toggleSettings,
} from "../redux/slices/sidebarSlice";
import { RootState } from "../redux/store";
import ContainedButton from "./ContainedButton";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";

const SideBar = () => {
  const sideBarState = useSelector((state: RootState) => state.sideBar.value);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  return (
    <div className="w-full flex flex-col justify-start items-center pt-12 mx-8 gap-4">
      <ContainedButton
        isActive={sideBarState === SIDEBAR.CAMPAIGN}
        text="Campaign"
        icon={<FontAwesomeIcon icon={faBullhorn} className="px-2" />}
        onClick={() => {
          dispatch(toggleCampaign());
          navigate(ROUTES.HOME);
        }}
      />
      <ContainedButton
        isActive={sideBarState === SIDEBAR.SETTINGS}
        text="Settings"
        icon={<FontAwesomeIcon icon={faGear} className="px-2" />}
        onClick={() => {
          dispatch(toggleSettings());
          navigate(ROUTES.SETTINGS);
        }}
      />
    </div>
  );
};

export default SideBar;
