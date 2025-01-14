import { useState } from "react";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Username:`, username);
        console.log(`Password:`, password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" value={username} onChange={handleUsernameChange} />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="text" id="password" value={password} onChange={handlePasswordChange} />
            </div>
            <button type="submit">Accedi</button>
        </form>
    );

}

export default LoginForm