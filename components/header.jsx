import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className=" flex justify-between items-center mt-[2rem] mb-[5rem]">
        <Image src="./image/logo.svg" width={65} height={65} />
        <button className="h-10 w-40 bg-black text-white rounded-full">
          Free Consultion
        </button>
      </div>
    </div>
  );
};

export default Header;
