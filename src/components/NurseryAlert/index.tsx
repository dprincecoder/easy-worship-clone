import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCount,
  hideAlert,
} from "../../redux/nuseryAlert/nurserySlice";
import { AppDispatch, RootState } from "../../redux/store";
import "./nurseryAlert.css";

const NurseryAlert = () => {
  const dispatch: AppDispatch = useDispatch();
  const textList = useSelector(
    (state: RootState) => state.nurseryAlert.textList
  );
  const count = useSelector((state: RootState) => state.nurseryAlert.count);
  const isVisible = useSelector(
    (state: RootState) => state.nurseryAlert.isVisible
  );

  const [timer, setTimer] = useState<number>(count);
  useEffect(() => {
    if (count === 0) {
      dispatch(hideAlert());
    } else {
      setTimer(
        setInterval(() => {
          dispatch(decrementCount());
        }, 1000)
      );
    }

    if (count < 0) {
      clearInterval(timer);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [count, isVisible, timer]);
  console.log(isVisible, count, timer);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveTextIndex((prevIndex) => {
  //       const nextIndex = prevIndex + 1;
  //       if (nextIndex >= dummyText.length) {
  //         clearInterval(interval);
  //       }
  //       return nextIndex;
  //     });
  //   }, 3000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [textList]);

  // if (!isVisible && textList.length === 0) {
  //   return null; // Don't render anything if the alert is hidden
  // }
  // if (dummyCount < 0) {
  //   return null; // Don't render anything if the alert is hidden
  // }

  return (
    <div
      className={`nurseryalertContainer ${count < 0 ? "hideAlert" : ""} ${
        isVisible ? "" : "hideAlert"
      }`}
    >
      <div className="animate-left">
        {textList.map((text: string, index: any) => (
          <p key={index} className={"p"}>
            {text}
          </p>
        ))}
      </div>
    </div>
    // <div className="nurseryalertContainer">
    //   {dummyText.map((text, index) => (
    //     <p
    //       key={index}
    //       className={`nurseryalertText ${
    //         index === activeTextIndex ? "active" : ""
    //       }`}
    //     >
    //       {text}
    //     </p>
    //   ))}
    // </div>
  );
};

export default NurseryAlert;
