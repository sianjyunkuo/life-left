import React, { useState } from "react";
import { DateInput } from "@mantine/dates";

const LifeCalendar = () => {
  const [birthDate, setBirthDate] = useState(new Date());
  const weeksPerYear = 52;
  const currentYear = new Date().getFullYear();
  const years = currentYear - birthDate.getFullYear();
  const totalWeeks = years * weeksPerYear;

  const weeksElapsedSinceBirth = () => {
    const now = new Date();
    const start = new Date(
      birthDate.getFullYear(),
      birthDate.getMonth(),
      birthDate.getDate()
    );
    const diff = now - start; // milliseconds between now & birth date
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 7)); // convert to weeks
  };

  const renderWeeks = () => {
    const weeksElapsed = weeksElapsedSinceBirth();
    let weeks = [];
    for (let i = 0; i < totalWeeks; i++) {
      weeks.push(
        <div
          key={i}
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: i < weeksElapsed ? "black" : "white",
            border: "1px solid black",
            boxSizing: "border-box",
          }}
        />
      );
    }
    return weeks;
  };

  return (
    <div>
      <DateInput
        placeholder="Pick date"
        value={birthDate}
        onChange={setBirthDate}
        maxDate={new Date()}
        label="Select your birth date"
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(70, 10px)`,
          gap: "2px",
        }}
      >
        {renderWeeks()}
      </div>
    </div>
  );
};

export default LifeCalendar;
