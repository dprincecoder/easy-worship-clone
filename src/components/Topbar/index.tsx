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
import Divider from "../Divider";
import Tooltip from "../ToolTip";
import "./topbar.css";
import { useState } from "react";
type Props = {};

const Topbar = () => {
  const [showTooltip, setShowTooltip] = useState(false);
   let timer: number;

   const handleMouseEnter = () => {
     timer = setTimeout(() => {
       setShowTooltip(true);
     }, 3000);
   };

   const handleMouseLeave = () => {
     clearTimeout(timer);
     setShowTooltip(false);
   };

  return (
    <div className="topbar">
      <div className="topbarFile">
        <div
          className="topbarFileIcon"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <AiOutlineFile className="topbarFileIcon" />
          {
          showTooltip &&
          <Tooltip text="Create new schedule" />
          }
        </div>
        <div className="topbarFileIcon">
          <img src={yellowOpenIcon} alt="open" />
        </div>
        <div className="topbarFileIcon">
          <CiFloppyDisk className="topbarFileIcon" />
        </div>
        <div className="topbarFileIcon">
          <img src={createNew} alt="create new" />
        </div>
        <div className="topbarFileIcon">
          <MdEditDocument className="topbarFileIcon" />
        </div>
        <Divider />
        <div className="topbarFileIcon">
          <FcPrint className="topbarFileIcon" />
        </div>
        <div className="topbarFileIcon">
          <img src={tv} alt="tv" />
        </div>
        <div className="topbarFileIcon">
          <img src={transitionIcon} alt="transition" />
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
