import {useState} from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div>
      <h1>{isLoggedIn? "The user is logged in!" : "Please Log In"}</h1>

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn? "Log Out" : "Log In"}
      </button>
    </div>
  )
}

export default App;