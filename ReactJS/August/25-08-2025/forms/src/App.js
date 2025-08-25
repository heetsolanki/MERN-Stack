import React, { useState } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submittedFirstName, setSubmittedFirstName] = useState("");
  const [submittedLastName, setSubmittedLastName] = useState("");

  const onSubmits = (event) => {
    event.preventDefault();
    setSubmittedFirstName(firstName);
    setSubmittedLastName(lastName);
  };

  const inputFirstName = (event) => {
    console.log(event.target.value);
    setFirstName(event.target.value);
  };

  const inputLastName = (event) => {
    console.log(event.target.value);
    setLastName(event.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmits}>
        <h1>
          Hello, {submittedFirstName} {submittedLastName}
        </h1>
        <input
          type="text"
          placeholder="Enter first name"
          onChange={inputFirstName}
          value={firstName}
        />
        <br />
        <input
          type="text"
          placeholder="Enter last name"
          onChange={inputLastName}
          value={lastName}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
