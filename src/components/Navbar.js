import React, {useContext, useEffect} from 'react'
import {UserContext} from '../contexts/UserContext';


const Navbar = () => {

    const {users} = useContext(UserContext);

   

    const menu = localStorage.user ? (
        <div className='navbar'>
            <div>
                <ul>
                    <a href='/'><li>Home</li></a>
                    <a href='/login'><li>Log In</li></a>
                    <a href='/contact'><li>Contact</li></a>
                    <a href='/register'><li>Sign up</li></a>
                </ul>
            </div>
            {/* <div className='user-status'>
                <p>{user.first_name}</p>
                <img src={user.picture}/>
            </div> */}
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
    return ( 
        <div>
            {menu}
        </div>
     );
}
 
export default Navbar;