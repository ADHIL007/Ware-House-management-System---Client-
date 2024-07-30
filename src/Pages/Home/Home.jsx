import Login from "../../Components/app-main-Login/Login";
import "./Home.css";
import React, { useState } from 'react';



export default function Home() {
    const [login, setLogin] = useState(false);
    const[userid,setuserid] = useState("")
    const[password,setpwd] = useState("")

    const data ={
        userid : userid,
        password:password
    }

   
    console.log(login)

    const handleLogin = () => {
        setLogin(true);
        console.log(login)
    }


 

    return (
        <div className="app-main-home">
            {login ? (
                <>You are logged in</>
            ) : (
           <Login />
            )}
        </div>
    );
}
