import { useState } from "react";
import { Link } from "react-router-dom";
// import useTitle from "../hooks/useTitle.js";
import "../styles/Login.css";

function Login() {
    const [formData, setFormData] = useState({});
    // useTitle("Login");

    function onSubmit(event) {
        event.preventDefault();
        fetch("/api/login", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    setFormData({ error: data.error });
                    return;
                }
                window.location.href = "/addnews";
            });
    }

    function onInput(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }
    return (
        <div className="loginContainer">
            <form onSubmit={onSubmit} className="loginForm">
                <h2 className="loginTitle">Login</h2>

                <ul className="loginUl">
                    <li>
                        <input
                            className="loginInput"
                            type="email"
                            name="email"
                            required
                            placeholder="Email"
                            onInput={onInput}
                        />
                    </li>
                    <li>
                        <input
                            className="loginInput"
                            type="password"
                            name="password"
                            required
                            placeholder="Password"
                            onInput={onInput}
                        />
                    </li>
                    <li>
                        <button type="submit" className="loginBtn">
                            LOGIN
                        </button>
                    </li>
                </ul>
            </form>
        </div>
    );
}

export default Login;
