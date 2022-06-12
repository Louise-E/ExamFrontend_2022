import React, {useState} from "react";
const Login = ({onAdd}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if (!username) {
            alert("Please enter username");
            return;
        }
        if (!password) {
            alert("Please enter password");
            return;
        }
        onAdd({username, password});
        setUsername("");
        setPassword("");
    };

    return (
        <div className="body" id="logindiv">
            <h3>Login</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control" id="usernamediv">
                    <label>Username</label>
                    <input type="text" placeholder="username"
                    value={username} onChange={(e)=>setUsername(e.target.value)}/>
                </div>
                <div className="form-control" id="passworddiv">
                    <label>Password</label>
                    <input type="password" placeholder="password"
                    value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <input  className="buttonLog" type="submit" value="Submit"/>
            </form>
        </div>
    );
};
export default Login;