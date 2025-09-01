function App(props) {
  return <div>
    <ul>
      <li>Name: {props.name}</li>
      <li>Roll No: {props.rollNo}</li>
      <li>Marks in MERN: {props.mern}</li>
      <li>Marks in AI/ML: {props.aiml}</li>
    </ul>
  </div>
}

export default App;