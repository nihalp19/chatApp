import React from "react"
import { signOut} from "firebase/auth"
import { auth} from "../firebase"
function Logout(){

    const style = {
        signOutButton : 'text-white px-[12px] py-[4px] bg-blue-600',
    }

    const handleSignOut = async () => {
        try{
            await signOut(auth)
        }
        catch(e)
        {
            console.error(e);
        }
    }

    return(
        <button className={style.signOutButton} onClick={handleSignOut}>Logout</button>
    )
}

export default Logout