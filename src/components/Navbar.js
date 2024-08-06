import React, { useEffect, useState } from 'react'
import SignIn from './SignIn'
import Logout from './Logout'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
function Navbar() {
    const [userStatus, setUserStatus] = useState({})

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUserStatus(user)
        })
    }, [])
    const style = {
        navContainer: 'bg-gray-800 h-20 w-full flex justify-between items-center p-4',
        heading: 'text-white text-3xl',
    }

    return (
        <div className={style.navContainer}>
            <h1 className={style.heading}>chatRoom</h1>
            {userStatus ? (<Logout />): (<SignIn />) }
        </div>
    )
}

export default Navbar;