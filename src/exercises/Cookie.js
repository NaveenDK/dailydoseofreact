import { useState } from "react";

export default function Cookie() {
  //TODO: Create a cookie clicker app that displays an additional cookie every x amount of clicks

  let [count, setCount] = useState(0);
  let [cookie, setCookies] = useState("");

  const addCookie = () => {
    console.log("added");
    if (count > 0 && count % 2 == 0) {
      console.log("Im in when count: ");
      console.log(count);
      cookie = cookie + "🍪";
      setCookies(cookie);
    }
    count++;
    setCount(count);
    //console.log(count);
    //c//onsole.log("coookie:: ");
    // console.log(cookie);
  };

  return (
    <>
      <p>🍪{cookie}</p>
      <button onClick={addCookie}>clicker app goes her </button>
    </>
  );
}
