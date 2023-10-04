import { useState } from "react";
import ReactDOM from "https://esm.sh/react-dom@18.2.0";

const Lists = () => {
  const [naughtyKids, setNaughtyKids] = useState([]);
  const [niceKids, setNiceKids] = useState([]);
  const [kidName, setKidName] = useState();

  // Add the handleSort function here

  // Add a reference to the input field here

  const addName = (name, kidtype) => {
    console.log("did we get name:" + name);
    if (kidtype === "naughty" && name.length > 0) {
      console.log("naughty");
      setNaughtyKids(function (naughtyKids) {
        return [...naughtyKids, name];
      });
      console.log(naughtyKids);
    }
    if (kidtype === "nice" && name.length > 0) {
      setNiceKids(function (niceKids) {
        return [...niceKids, name];
      });
    }

    setKidName("");
  };
  return (
    <>
      <div>
        <h1>Santa's Naughty and Nice List</h1>
        {/* Add the input field here */}
        {/* Add the buttons here */}
        <input
          value={kidName}
          onChange={(e) => setKidName(e.target.value)}
          type="text"
          name="name"
        />
        <button onClick={() => addName(kidName, "naughty")}>Naughty</button>
        <button onClick={() => addName(kidName, "nice")}>Nice</button>
        <h2>Naughty List</h2>
        {/* Add list here */}
        {naughtyKids.map((e) => {
          return <li>{e}</li>;
        })}
        <h2>Nice List</h2>
        {/* Add list here */}
        {niceKids.map((e) => {
          return <li>{e}</li>;
        })}
      </div>
    </>
  );
};

export default Lists;
