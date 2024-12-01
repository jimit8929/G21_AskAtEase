import React from "react";
import Post from "./mainpagepost";
import SpacesToFollow from "./mainpagaright";
import myphoto from "./Assets/myphoto.jpg";
import TCS from "./Assets/download.png";
import eyeopen from "./Assets/eye-open.png";
import friedick from "../Components/Assets/friedick.jpeg";
import CR7 from "../Components/Assets/cr7.jpg";
import AnswerLeftSection from "../Components/AnswerLeftSection";
import AnswerRightSection from "./AnswerRightSection";
import AddQuestion from "./AddQuestion";

const AnswerMainComponent = () => {
  return (
    <div className="flex justify-evenly w-full gap-2 bg-white p-2">
      {/* Left Section (20%) */}
      <div className="w-1/5 p-2 m-2 rounded-2xl h-max">
        <AnswerLeftSection />
      </div>

      {/* Center Section (50%) */}
      <div className="w-2/3 bg-gray-200 p-2 rounded-2xl">
        {/* User Input Section */}
        <div className="bg-white p-2 rounded-xl mb-2">
          <AddQuestion />
        </div>

        {/* Buttons Row */}

        {/* Display Posts */}
        <div className="space-y-6">
          <Post
            profileImg={myphoto}
            name="JIMIT"
            date="14th Nov, 2024"
            question="What's your salary in TCS?"
            description="Looking for insights on salary ranges at TCS..."
            postImg={TCS}
          />
          <Post
            profileImg={eyeopen}
            name="Alex"
            date="14th Nov, 2024"
            question="What would you guys want to have in video tutorial"
          />
          <Post
            profileImg={friedick}
            name="Football_Fan"
            date="14th Nov, 2024"
            question="Who is the TOP Scorer of All Time?"
            postImg={CR7}
          />
        </div>
      </div>

      {/* Right Section (30%) */}
      <div className="w-3/10 p-2 bg-white rounded-2xl">
        <AnswerRightSection />
      </div>
    </div>
  );
};

export default AnswerMainComponent;
