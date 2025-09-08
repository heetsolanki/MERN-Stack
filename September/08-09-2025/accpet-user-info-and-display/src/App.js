import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [language, setLanguage] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // ✅ Unified handler using spread operator
  const handleLanguageChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setLanguage([...language, value]); // add new
    } else {
      setLanguage(language.filter((lang) => lang !== value)); // remove
    }
  };

  return (
    <div>
      {submitted && (
        <div>
          <h1>Hello {name}!</h1>
          <h2>Phone: {phone}</h2>
          <h2>Languages Known: {language.join(", ")}</h2>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="number"
          placeholder="Enter your phone number"
          onChange={(e) => setPhone(e.target.value)}
        />

        <br /><br />

        {/* Languages checkboxes */}
        {["English", "Hindi", "Marathi", "Gujarati", "Punjabi"].map((lang) => (
          <div key={lang}>
            <input
              type="checkbox"
              value={lang}
              onChange={handleLanguageChange}
            />
            <label>{lang}</label>
          </div>
        ))}

        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
