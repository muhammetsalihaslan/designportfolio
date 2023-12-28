import React from "react";

const Book = () => {
  return (
    <div>
      <div className="flex bg-black text-white h-[250px] rounded-md mt-[5rem] mb-[5rem]">
        <div className="flex flex-col justify-center w-2/3 p-[4rem]">
          <h1 className="text-4xl font-bold">Book a call with me</h1>
          <p className="text-xl mt-5">
            I’d love to have a chat to see how I can help you. The best first
            step is for us to discuss your project during a free consultation.
            Then we can move forward from there.
          </p>
        </div>
        <div className="flex justify-center items-center w-1/3">
          <button className="h-10 w-40 bg-[#EB7565] text-white rounded-full hover:bg-[#F6A560] flex justify-center items-center">
            Free Consultion
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
