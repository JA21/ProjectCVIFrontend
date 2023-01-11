import { useState } from "react"
import PropTypes from 'prop-types';
import "./index.css";

async function loginUser(credentials) {
     return fetch('http://localhost:3500/auth/signIn', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data =>data.json()) 
}

const Login = ({ setToken }) => {
    const [username, setUserName] = useState();
    const [password, setpassword] = useState();
    localStorage.setItem("name_user",username)
    const handleSubmit = async e => {
        e.preventDefault();     
        const token = await loginUser({
           name_user: username,
            password
        });
        setToken(token); 
    }

    return (
        <div className="login-conatiner">
            <h1 style={{ fontSize: 30, color: 'red' }}>Hola</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                </label>
                <input type={"text"} onChange={e => setUserName(e.target.value)} />
                <label>
                    <p>password</p>
                </label>
                <input type={"password"} onChange={e => setpassword(e.target.value)} />
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func
} 
export default Login;