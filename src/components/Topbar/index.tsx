import { AiFillCaretDown, AiOutlineFile } from "react-icons/ai";
import { BsImageAlt } from "react-icons/bs";
import { CiFloppyDisk } from "react-icons/ci";
import { FcPrint } from "react-icons/fc";
import { GrAlert } from "react-icons/gr";
import { MdEditDocument } from "react-icons/md";
import { TbLivePhoto } from "react-icons/tb";
import createNew from "../../assets/create-new.png";
import transitionIcon from "../../assets/transition.png";
import tv from "../../assets/tv.png";
import yellowOpenIcon from "../../assets/yellow-open-folder.png";
import { tooltipPostitionEnum } from "../../config";
import Divider from "../Divider";
import Tooltip from "../ToolTip";
import "./topbar.css";
type Props = {};

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarFile">
        <div className="topbarFileIcon">
          <Tooltip
            disabled={false}
            position={tooltipPostitionEnum.Down}
            content={"Create schedule (unavailable)"}
          >
            <AiOutlineFile className="topbarFileIcon" />
          </Tooltip>
        </div>
        <div className="topbarFileIcon">
          <Tooltip
            disabled={false}
            position={tooltipPostitionEnum.Down}
            content={"Open schedule (unavailable)"}
          >
            <img src={yellowOpenIcon} alt="open" />
          </Tooltip>
        </div>
        <div className="topbarFileIcon">
          <Tooltip
            disabled={false}
            position={tooltipPostitionEnum.Down}
            content={"Save schedule (unavailable)"}
          >
            <CiFloppyDisk className="topbarFileIcon" />
          </Tooltip>
        </div>
        <div className="topbarFileIcon">
          <Tooltip
            disabled={false}
            position={tooltipPostitionEnum.Down}
            content={"Create new song in my database"}
          >
            <img src={createNew} alt="create new" />
          </Tooltip>
        </div>
        <div className="topbarFileIcon">
          <Tooltip
            disabled={false}
            position={tooltipPostitionEnum.Down}
            content={"Edit song in my database"}
          >
            <MdEditDocument className="topbarFileIcon" />
          </Tooltip>
        </div>
        <Divider />
        <div className="topbarFileIcon">
          <Tooltip
            disabled={false}
            position={tooltipPostitionEnum.Down}
            content={"Print song in my database (unavailable)"}
          >
            <FcPrint className="topbarFileIcon" />
          </Tooltip>
        </div>
        <div className="topbarFileIcon">
          <Tooltip
            disabled={false}
            position={tooltipPostitionEnum.Down}
            content={"Preview schedule (unavailable)"}
          >
            <img src={tv} alt="tv" />
          </Tooltip>
        </div>
        <div className="topbarFileIcon">
          <Tooltip
            disabled={false}
            position={tooltipPostitionEnum.Down}
            content={"Select Transition"}
          >
            <img src={transitionIcon} alt="transition" />
          </Tooltip>
        </div>
        <Divider />
      </div>

      <div className="topbarBGPicker">
        <div />
        <div className="topbarBGPickerRight">
          <p>
            <span>Background</span>
            <AiFillCaretDown className="arrrdn" />
          </p>
          <p>
            <span>Go Live</span>
            <TbLivePhoto className="liveBlink" />
          </p>
        </div>
        <Divider />
      </div>
      <div className="topbarNurs">
        <div className="alert">
          <GrAlert />
          <AiFillCaretDown />
        </div>
        <div className="logos">
          <div className="logowrap">
            <div className="logo">
              <BsImageAlt className="logoblue" />
              Logo
            </div>
            <div className="logo">
              <BsImageAlt />
              Black
            </div>

            <div className="logo">
              <BsImageAlt className="logowhite" />
              Clear
            </div>
          </div>
          <Divider />
          <div className="livenow">
            <p>Live</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
