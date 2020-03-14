import React, {useState} from 'react';
import axios from 'axios';

const Login = () => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("")


    const handleMailChange = (e) => {
        e.preventDefault();
        setMail(e.target.value);
        console.log(mail);        
    }

    const handlePasswordChange = (e) => {
        e.preventDefault();
        setPassword(e.target.value);    
        console.log(password);    
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let body = {
            mail: mail,
            password: password
        }

        axios({
            method: 'post',
            url: 'http://localhost:4040/auth/login/',
            data: body,
            headers: {
                'Content-Type': 'Application/json'
            }
        })
        .then( res => {
            console.log(res.status)
            localStorage.clear();
            localStorage.setItem('token', res.data.token);            
        })
        .catch( err => console.log(err))


    }


    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="name" value={mail} onChange={handleMailChange}/>
                <input type="password" placeholder="password" value={password} onChange={handlePasswordChange}/>
                <button>Log In, yo!</button>
            </form>
        </div>
     );
}
 
export default Login;