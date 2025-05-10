import logo from './logo.svg';
import './App.css';

import {useState} from "react";

function App() {

    const [email, setEmail] = useState("example@example.com")


    function handleChange(event) {
        setEmail(event.target.value);
    }

    let message = '';
    if (email.length <10){
        message = "Twoj email jest za krótki";
    } else if (email.length > 20) {
        message ="Twoj email jest za dlugi"
    } else {
        message = "Twoj email jest w sam raz"
    }
    return (
      <div>

        <h1>System do zapisów na zajęcia</h1>
          <h2>Twój e-mail to: {email}</h2>
          <div>{message}</div>
          <input type="text" onChange={handleChange}/>

      </div>

  );
}

export default App;
