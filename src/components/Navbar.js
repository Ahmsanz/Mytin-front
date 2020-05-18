import React, {useContext, useEffect, useState} from 'react'
import {UserContext} from '../contexts/UserContext';
import {AuthContext} from '../contexts/AuthContext'
import {FaGoogle} from 'react-icons/fa'


const Navbar = () => {

    const {isLoggedIn} = useContext(AuthContext);
    const {users} = useContext(UserContext);
    const [logOut, setLogOut] = useState(false);

    const loggedUser = isLoggedIn ? users.filter( user => user.mail == localStorage.mail) : undefined;

    const handleClick = (e) => {
        e.preventDefault();
        localStorage.clear();
        setLogOut(true);
        setTimeout(() => {
            window.location.href = '/';
        }, 2200);
    }


    const menu = loggedUser !== undefined ? loggedUser.map( user => {
        return (
            <div className='navbar'>
            <div>
            <ul>
                <a href='/cities'><li>Cities</li></a>
                <a href='/contact'><li>Contact</li></a>
                <a style={{cursor: 'pointer'}} onClick={handleClick}><li>Log Out</li></a>
            </ul>
            </div>
            <a id='user-status' href='/profile'>
                <p>{user.first_name}</p>
                <img src={user.picture}/>
            </a>
        </div>
        )
    }
        
    ) : (
        <div className='navbar'>
            <ul>
                <a href='/'><li>Home</li></a>
                <a href='/login'><li>Log In</li></a>
                <a href='/contact'><li>Contact</li></a>
                <a href='/register'><li>Sign up</li></a>
            </ul>
            <div className='google-but'>
                <FaGoogle />
                <a href='http://localhost:4040/auth/google'><span>Sign in with Google</span></a>
            </div>
            
        </div>

    );

    const bye = logOut == true ? (
        <div>
            <h3>Good bye, friend! Hope to see you again soon.</h3>
        </div>
    ) : (
        <div></div>
    );
    return (
        <div>
            <div>
                {menu}
            </div>
            <div>
                {bye}
            </div>
        </div>
     );
}

export default Navbar;
