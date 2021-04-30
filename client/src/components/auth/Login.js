import React, { useState } from "react";

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const { email, password } = user;

    const onChange = (e) => {
        e.preventDefault();
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Login User");
    };

    return (
        <div className="form-container">
            <h1>
                Accout <span className="text-primary">Login</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder="Email..."
                        value={email}
                        name="email"
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Password</label>
                    <input
                        type="password"
                        placeholder="password..."
                        value={password}
                        name="password"
                        onChange={onChange}
                    />
                </div>
                <input
                    type="Submit"
                    className="btn btn-primary btn-block"
                    value="Login"
                />
            </form>
        </div>
    );
};

export default Login;
