import React, { useState } from "react";
import ReactDOM from "https://esm.sh/react-dom@18.2.0";
const positiveAdjectives = [
  "Beautiful",
  "Joyful",
  "Kind",
  "Loving",
  "Patient",
  "Thoughtful",
  "Courageous",
  "Intelligent",
  "Ambitious",
  "Creative",
  "Confident",
  "Enthusiastic",
];

const funnyNouns = [
  "Sausage",
  "Pickle",
  "Cactus",
  "Kitten",
  "Zombie",
  "Unicorn",
  "Yeti",
  "Alien",
  "Shark",
  "Giraffe",
  "Elephant",
  "Gorilla",
  "Panda",
  "Sloth",
  "Flamingo",
  "Chimpanzee",
  "Giraffe",
  "Hippopotamus",
  "Ostrich",
  "Crocodile",
  "Squirrel",
  "Koala",
  "Pig",
  "Chicken",
  "Mouse",
  "Cat",
  "Dog",
  "Squirrel",
  "Llama",
  "Fox",
  "Polar bear",
];

export default function Superhero() {
  //use useState to keep track of the user's birth day, birth month and hero name

  //create a function called handle submit that will set the hero name depending on the user's inputs

  //keep in mind that you may need to prevent default
  let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  let [date, setDate] = useState("");
  let [month, setMonth] = useState("");
  let [heroName, setHeroName] = useState("");

  function generateName(e) {
    e.preventDefault();
    console.log("you have selected the followign date: ");
    console.log(date);
  }

  function SubmitHandler(e) {
    e.preventDefault();
    console.log("you have selected the followign month: ");
    console.log(month);
    console.log("you have selected the followign date: ");
    console.log(date);
    setHeroName(positiveAdjectives[month] + " " + funnyNouns[date]);
  }
  return (
    <div>
      <p>{heroName && heroName}</p>
      {/* TODO: Render the form */}
      <form onSubmit={SubmitHandler}>
        <label>Month </label>
        <select onChange={(e) => setMonth(e.target.value)} name="month">
          {months.map(function (e) {
            return (
              <option key={e} value={e}>
                {e}
              </option>
            );
          })}
        </select>
        <label>Day </label>

        <select onChange={(e) => setDate(e.target.value)} name="day">
          {days.map(function (e) {
            return (
              <option key={e} value={e}>
                {e}
              </option>
            );
          })}
        </select>
        <button>Find out the name</button>
      </form>
      {/* TODO: Use select and option elements to give the user the available options for their birth day and month */}
    </div>
  );
}
