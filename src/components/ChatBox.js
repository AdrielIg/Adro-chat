import Messages from "./Messages"

import { useState } from 'react';
import { useChat } from './useChat';
import { db } from '../firebase/Firebase';
import SendMessage from "./SendMessage";

function ChatBox() {


    const { loading, messages, error } = useChat()


    const onUpdateDB = (mensajeEnviado) => {


        db.collection("messages").add({ timestamp: Date.now(), message: mensajeEnviado, user: sessionStorage.getItem("userName") })



    }


    const messageOrder = messages.map(mes => mes.timestamp)



    function compare(a, b) {
        if (a.timestamp < b.timestamp) {
            return 1;
        }
        if (a.timestamp > b.timestamp) {
            return -1;
        }
        return 0;
    }

    const messagesOrder = messages.sort(compare);






    return (
        <div className="wrapper">
            <h1>Adro-chat</h1>
            <p>Escribi y sorprendete rey</p>
            <div className="display">
                <ul>
                    <Messages mensajes={messagesOrder} />
                </ul>
            </div>
            <SendMessage onSubmitFormulario={onUpdateDB} />
        </div>
    );
}

export default ChatBox;
