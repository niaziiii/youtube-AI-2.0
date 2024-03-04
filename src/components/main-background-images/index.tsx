import React from "react";

const MainBackgrounImages = () => {
  return (
    <div className="flex z-0 justify-between absolute top-0 left-0 h-screen w-full">
      <img
        src="/background/img1.svg"
        height={100}
        width={100}
        alt="AI YouTube"
        className="w-[50%]"
      />
      <img src="/background/img4.svg" alt="AI YouTube" />
    </div>
  );
};

export default MainBackgrounImages;
