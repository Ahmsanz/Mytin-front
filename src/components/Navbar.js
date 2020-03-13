import React from 'react'


const Navbar = () => {
    return ( 
        <div className='navbar'>
            <ul>
                <a href='/'><li>Home</li></a>
                <a href='/login'><li>Log In</li></a>
                <a href='/contact'><li>Contact</li></a>
            </ul>
        </div>
     );
}
 
export default Navbar;