import React from "react";
import TeamCard from "./component/TeamCard";
import person1 from './assets/person1.png'
import person2 from './assets/person2.png'
import person3 from './assets/person3.png'
import person4 from './assets/person4.png'
import person5 from './assets/person5.png'
import person6 from './assets/person6.png'

const App = () => {
  return (
    <div className="text-red-300">
      <h2 className="text-4xl font-bold text-center py-6 ">Team Member</h2>
      <div className="flex justify-around gap-10 px-10 py-20  flex-wrap">
        <TeamCard name="Rishika Baral" Age="24" Role="Fullstack Developer" Number= '98477747474' image={person1} Email="xcv@gmail.com"/>
     
        <TeamCard name="Rishika Baral" Age="24" Role="Fullstack Developer" Number= '98477747474' image={person2} Email="xcv@gmail.com"/>
     
        <TeamCard name="Rishika Baral" Age="24" Role="Fullstack Developer" Number= '98477747474' image={person3} Email="xcv@gmail.com"/>
     
        <TeamCard name="Rishika Baral" Age="24" Role="Fullstack Developer" Number= '98477747474' image={person4} Email="xcv@gmail.com"/>
     
        <TeamCard name="Rishika Baral" Age="24" Role="Fullstack Developer" Number= '98477747474' image={person5} Email="xcv@gmail.com"/>
     
        <TeamCard name="Rishika Baral" Age="24" Role="Fullstack Developer" Number= '98477747474' image={person6} Email="xcv@gmail.com"/>
     
      </div>
    </div>
  );
};

export default App;
