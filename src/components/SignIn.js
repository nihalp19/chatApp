import React from "react"
import { signInWithPopup} from "firebase/auth"
import { auth ,provider} from "../firebase"
function SignIn(){

    const style = {
        signInButton : 'text-white px-[12px] py-[4px] bg-blue-600',
    }

    const handleSignIn = async () => {
        try{
            await signInWithPopup(auth,provider)
        }
        catch(e)
        {
            console.error(e);
        }
    }

    return(
        <button className={style.signInButton} onClick={handleSignIn}>SignIn with Google</button>
    )
}

export default SignIn
