import logo from './logo.svg';
import './App.css';

import {useState} from "react";

function App() {

    const [email, setEmail] = useState()
    const [authentictedUserName, setAuthenticatedUserName] = useState(email)
    function handleChange(event) {
        setEmail(event.target.value);
    }

    function emailAlert(){
        alert("Twój adres email to: " + email);
    }


   return (
   <div>
   <h1>System do zapisów na zajęcia</h1>
       { !authentictedUserName && (
      <div>
          Zaloguj sie adresem email:
      <input type="text" onChange={handleChange}/>
    <button type="button" onClick={()=>setAuthenticatedUserName(email)}>Wchodzę</button>
      </div>
       )}{
       authentictedUserName&& <div>
           <h1>Zalogowales się {email}</h1>
       <button type="button" onClick={()=>setAuthenticatedUserName(null) }>Wyloguj się</button>
       </div>
       }
  </div>

);
 }

export default App;
