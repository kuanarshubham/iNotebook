import { useState } from "react";
import Navbar from "./Navbar";


function Login() {

    const [credential, setCredential] = useState({email: "", password: ""});

    const handleSubmit = async (e) =>  {
        e.preventDefault();

        const host = "http://localhost:5000";

        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credential.email, password: credential.password})
        });

        const json = await response.json();
        // console.log(json);

        if(json.sucess === true){
            localStorage.setItem('token', json.authtoken)
        }
        else{
            alert("Login using correct credentials");
        }
    }


    const onChange = (e) => {
        setCredential({...credential, [e.target.name]: e.target.value});
    }


    return (
        <>
            <Navbar />

            <div className="container my-4" >
                <h2>Log-in</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name= "email" aria-describedby="emailHelp" value={credential.email} onChange={onChange}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" value={credential.password} onChange={onChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Login;