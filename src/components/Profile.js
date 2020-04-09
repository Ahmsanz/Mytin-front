import React, { useContext } from 'react';
import {UserContext} from '../contexts/UserContext'

const Profile = () => {
    const {users} = useContext(UserContext);

    const user = users.filter( user => user.mail == localStorage.mail)

    console.log(user)

    return ( 
        user ? (user.map( user => {
            return (
                <div className="profile">
                    <div className = "header">
                        <h2>This is your personal profile</h2>
                    </div>
                    <div className ="user-info">
                        <div className="pic-name">
                            <img src={user.picture}></img>
                            <h3>{user.first_name}</h3>
                        </div>
                        <div className = "genInfo">
                            
                        </div>
                    </div>
                </div>
            )
        })
        
        ) : (
            <div>Come closer, let me take a look at your face.</div>
        )
    )
}
 
export default Profile;