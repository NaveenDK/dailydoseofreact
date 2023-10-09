import React, { useState } from "react";
import { Button } from "react-bootstrap";
const notes = ["C", "D", "E", "F", "G", "A", "B"];

const test = () => {
  console.log("Test");
};

const PianoKey = ({ note, isPressed, onPress }) => (
  <>
    <div
      onClick={() => onPress(note)}
      className={isPressed ? "pressed" : ""}
      style={{
        width: "30px",
        height: "100px",
        border: "1px solid black",
        background: "white",
        display: "inline-block ",
      }}
    >
      {note}
    </div>
  </>
);

/*
  TODO: CREATE VISUALS FOR THE KEYS AS BUTTONS */

/*
  TODO: GIVE PRESSED BUTTONS THE pressed CLASSNAME
  TODO: ADD FUNCTIONALITY TO BUTTONS & RENDER THEIR NOTE NAME
  */

const Piano = ({ pressedNotes, onPressKey }) => (
  <div>
    keys go here
    <div style={{ display: "flex" }}>
      {notes.map((e) => (
        <PianoKey
          note={e}
          onPress={onPressKey}
          isPressed={pressedNotes.includes(e)}
        />
      ))}
    </div>
    {/*TODO: RENDER ALL KEYS HERE*/}
  </div>
);

const VPiano = () => {
  const [pressedNotes, setPressedNotes] = useState([]);

  const onPressKey = (note) => {
    setPressedNotes((prevPressedNotes) =>
      prevPressedNotes.includes(note)
        ? prevPressedNotes.filter((n) => n !== note)
        : [...prevPressedNotes, note]
    );
  };

  return <Piano pressedNotes={pressedNotes} onPressKey={onPressKey} />;
};

export default VPiano;
