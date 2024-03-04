import React from "react";

const MainBackgrounImages = () => {
  return (
    <div className="flex z-0 justify-between absolute top-0 left-0 h-screen w-full">
      <img
        src="/background/img1.svg"
        alt="AI YouTube"
        width={100}
        height={100}
        className="w-[50%]"
      />
      <img src="/background/img4.svg" alt="AI YouTube" />
    </div>
  );
};

export default MainBackgrounImages;
