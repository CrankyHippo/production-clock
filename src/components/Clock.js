import { useState, useEffect } from "react";
import "../App.css";

function Clock() {
  let [date, setDate] = useState(new Date());

  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <p className="date">
        {new Intl.DateTimeFormat("en-US", {
          dateStyle: "full",
        }).format(date)}
      </p>
      <h2 className="clock">{date.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;
