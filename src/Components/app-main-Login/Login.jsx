import React, { useState } from 'react';
import "./Login.css";
import logo from "/images/pngwing.com.png?url";

export default function Login() {
    const [UserID, setUserID] = useState("admin");
    const [password, setPassword] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();
        const data = {
            userId: UserID,
            password: password
        };
        // Implement your login logic here
        console.log('Login data:', data);
    };

    return (
        <div>
            <img src={logo} alt="Warehouse Logo" className="app-logo" />
            <form className="app-main-home-login" onSubmit={handleLogin}>
                <input 
                    className="app-main-input" 
                    type="text" 
                    placeholder="UserID"  
                    onChange={(e) => setUserID(e.target.value)}
                    value={UserID}
                />
                <input 
                    className="app-main-input" 
                    type="password" 
                    placeholder="Password" 
                    autoFocus 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <button className="app-main-Custombuttons" type="submit">Login</button>
            </form>
        </div>
    );
}
