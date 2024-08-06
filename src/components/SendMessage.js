import React, { useState } from "react"
import {auth, db} from '../firebase'
import { collection,addDoc ,serverTimestamp} from "firebase/firestore"
function SendMessage({scroll})
{
    const [input,setInput] = useState('')
    const style = {
        form : 'h-14 w-full max-w-[728px] flex text-xl absolute bottom-0',
        input : 'w-full text-xl p-3 bg-gray-900 text-white outline-none border-none',
        button : 'w-[20%] bg-green-500',
    }

    const sendMessage = async(e) => {
        const {uid,displayName} = auth.currentUser
        e.preventDefault();
        if(input === '')
        {
            alert('add a valid input')
            return
        }
        const docRef = collection(db,'messages')
        try{
            await addDoc(docRef,{
                text: input,
                name : displayName,
                uid,
                timestamp : serverTimestamp()
            })
        }
        catch(e)
        {
            console.error(e);
        }
        setInput('')
        scroll.current.scrollIntoView({behavior : 'smooth'})
    }

    return (
        <form onSubmit={sendMessage}className={style.form}>
            <input value={input} onChange={(e) => setInput(e.target.value)} className={style.input} type="text" />
            <button className={style.button} type="submit">Send</button>
        </form>
    )
}

export default SendMessage
