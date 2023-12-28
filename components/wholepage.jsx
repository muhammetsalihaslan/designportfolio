import React from "react";
import Header from "./header";
import Hero from "./hero";
import Mywork from "./mywork";
import Book from "./book";

const Wholepage = () => {
  return (
    <div className="w-fit bg-[#FFF7F1] h-screen ">
      <Header />
      <Hero />
      <Mywork />
      <Book />
      <Header />
    </div>
  );
};

export default Wholepage;
