import React from "react";

interface ViewerProps {
  backgroundColor?: string;
  backgroundImage?: string;
  image?: string;
  text: string;
  textColor?: string;
  wordColors?: Record<string, string>;
}

const Viewer: React.FC<ViewerProps> = ({
  backgroundColor = "#035fff",
  backgroundImage,
  image,
  text,
  textColor = "#fff",
  wordColors = {},
}) => {
  const viewerStyle: React.CSSProperties = {
    background: backgroundImage ? `url(${backgroundImage})` : backgroundColor,
    color: textColor,
    padding: "20px",
    width: "100%",
    height: "50vh",
  };

  const renderStyledText = () => {
    const words = text.split(" ");

    return words.map((word, index) => {
      const wordColor = wordColors[word] || textColor;

      const wordStyle: React.CSSProperties = {
        color: wordColor,
      };

      return (
        <span key={index} style={wordStyle}>
          {word}{" "}
        </span>
      );
    });
  };

  return (
    <>
      {image ? (
        <div
          style={{
            width: "100%",
            height: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={image}
            style={{ width: "100%", height: "100%" }}
            alt="logo" />
        </div>
      ) : (
        <div style={viewerStyle}>
          <p>{renderStyledText()}</p>
        </div>
      )}
    </>
  );
};

export default Viewer;
