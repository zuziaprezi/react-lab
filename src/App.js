import logo from './logo.svg';
import './App.css';
import "milligram";
import LoginForm from "./LoginForm";
import UserPanel from "./UserPanel";
import {useState} from "react";


function App() {

const [loggedIn, setLoggedIn] = useState(null)

    function login(username) {
    setLoggedIn(username)
    }

    function logout() {
        setLoggedIn(null)
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {
                loggedIn
                    ? <UserPanel username={loggedIn} onLogout={logout}/>
                    : <LoginForm onLogin={login}/>

            }
        </div>

    );
}


export default App;
