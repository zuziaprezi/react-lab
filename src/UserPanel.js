import {useState} from "react";

export default function UserPanel({username, onLogout}){

    return <div>
        <label>Zalogowales się jako {username}!</label>

            <button type="button" onClick={()=> onLogout()}>Wyloguj się</button>
    </div>

}