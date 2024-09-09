import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex relative justify-center flex-col items-center p-10">
        <div className="flex justify-center px-20 flex-col items-center my-10">
          <h3 className="text-3xl sm:text-8xl font-semibold text-center w-[22ch]">
            Learn. Build. Ship.
          </h3>
          <p className="text-sm px-10 sm:px-5 sm:w-1/2 text-center text-muted-foreground my-10">
            Hello, I'm Ritesh 👋🏻, a curious indie hacker building innovative
            products. Join me on my mission to explore new tech and create
            products that change the world... 
          </p>
          <div className="p-2 border rounded-full px-8 my-5">
            Stay Tunned !👇🏻
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
