import { useState } from "react";
import { api } from "../api/client";

function Login({ onLogin }: { onLogin: () => void }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        const res = await api.post("/auth/login", {
            email,
            password
        });

        console.log(res);

        if (res.token) {
            localStorage.setItem("token", res.token);
            alert("Login correcto");
            onLogin();
        } else {
            alert("Error login");
        }
    };

    return (
        <div>
            <h2>Login</h2>

            <input
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;