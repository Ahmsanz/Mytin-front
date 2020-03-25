import React, {useContext, useEffect, useState} from 'react'
import {UserContext} from '../contexts/UserContext';
import {AuthContext} from '../contexts/AuthContext'


const Navbar = () => {

    const {isLoggedIn} = useContext(AuthContext);
    const {users} = useContext(UserContext);
    const [user, setUser] = useState(null);
    const [logOut, setLogOut] = useState(false);

    useEffect( () => {
        if (isLoggedIn == true) {
            let loggedUser = users.filter( user => user.mail == localStorage.mail)
            setUser(loggedUser);
        }
    }, [users])


    const handleClick = (e) => {
        e.preventDefault();
        localStorage.clear();
        setLogOut(true);
        setTimeout(() => {
            window.location.href = '/';
        }, 2200);
    }


    const menu = user !== null ? (
        <div className='navbar'>
            <div>
            <ul>
                <a href='/cities'><li>Cities</li></a>
                <a href='/contact'><li>Contact</li></a>
                <a style={{cursor: 'pointer'}} onClick={handleClick}><li>Log Out</li></a>
            </ul>
            </div>
            <a id='user-status' href='#'>
                <p>{user[0].first_name}</p>
                <img src={user[0].picture}/>
            </a>
        </div>
    ) : (
        <div className='navbar'>
            <ul>
                <a href='/'><li>Home</li></a>
                <a href='/login'><li>Log In</li></a>
                <a href='/contact'><li>Contact</li></a>
                <a href='/register'><li>Sign up</li></a>
            </ul>
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
