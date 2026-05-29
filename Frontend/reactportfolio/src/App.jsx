import React from "react";
import heroImage from "./assets/rishika.png";
import html from "./assets/html.png";
import css from "./assets/css-3.png";
import js from "./assets/js.png";
import react from "./assets/physics.png";
import python from "./assets/python.png";
import sql from "./assets/mysql-database.png";

const App = () => {
  return (
    <div className="">
      <nav className="text-yellow-200 bg-[#1e334a] flex justify-center items-center gap-20 py-3 text-xl font-bold ">
        <a href="#">Home</a>
        <a href="#">Contact</a>
        <a href="#">About</a>
      </nav>
      <div className="flex h-[450px] bg-[#1e334a] text-yellow-200 px-20">
        <div className="w-1/2 flex flex-col justify-center items-center gap-10">
          <h2 className="text-6xl font-extrabold">I'm Rishika Baral</h2>
          <p className="text-xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            enim, perferendis accusamus eos dolorum doloribus cupiditate, fugiat
            cum eum voluptatibus laudantium.
          </p>
        </div>
        <div className="w-1/2 flex justify-center items-start h-[700px]">
          <img
            className="w-[700px] h-[600px] -mt-[250px] rounded-[50%]"
            src={heroImage}
            alt=""
          />
        </div>
      </div>
      <div className="py-10 px-20">
        <h2 className="text-4xl font-black text-center py-4 text-blue-900">About Me</h2>
        <p className="text-blue-900 text-center">
          <span className="text-3xl font-black">"</span> Hi! I’m a Full Stack
          Developer passionate about building web applications that actually
          work (most of the time).I enjoy working on both frontend and backend —
          from designing clean user interfaces to building strong server-side
          logic and APIs.I’m currently exploring modern technologies like React,
          Svelte, Node.js, and databases to create scalable and efficient
          applications. <span className="text-3xl font-black">"</span>
        </p>
      </div>
      <div className="bg-yellow-200 h-60 text-center pt-10 text-4xl font-black text-[#1e334a]">
        My Skill
        <div className="flex justify-center items-center gap-20 py-10">
          <img className="w-15" src={html} alt="" />
          <img className="w-15" src={css} alt="" />
          <img className="w-15" src={js} alt="" />
          <img className="w-15" src={react} alt="" />
          <img className="w-15" src={python} alt="" />
          <img className="w-15" src={sql} alt="" />
        </div>
      </div>
      <footer className="flex justify-around py-10 bg-[#1e334a] text-yellow-200">
        <h2 className="text-5xl font-bold">Rishika Baral</h2>
        <div>
          <h4 className="mb-3">Quick Links</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default App;
