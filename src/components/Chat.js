import React from "react"
import { useState, useEffect, useRef } from "react"
import { Query, onSnapshot, orderBy, query, collection } from "firebase/firestore"
import Message from "./Message"
import { db } from "../firebase"
import SendMessage from "./SendMessage"

const style = {
    main: 'flex flex-col p-[10px] relative',
}

function Chat() {
    const [messages, setMessages] = useState([])
    const scroll = useRef()

    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('timestamp'));
        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            let messages = [];
            
            QuerySnapshot.forEach((doc) => {
                console.log('doc',doc);
                
                messages.push({ ...doc.data(), id: doc.id })
            });

            setMessages(messages)

        })

        return () => unsubscribe()
    }, [])



    return (
        <>
            <main className={style.main}>
                {messages && messages.map((message) => {
                    return <Message key={message.id} message={message} />
                })}

            </main>
            <SendMessage scroll={scroll}/>
            <span ref={scroll}></span>
        </>
    )
}

export default Chat