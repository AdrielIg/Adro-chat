import { useEffect, useState } from "react"

const SendMessage = (props) => {

    const [messageText, setMessage] = useState("")




    const onSubmitForm = (e) => {
        e.preventDefault()
        props.onSubmitFormulario(messageText)
        setMessage("")


    }





    return (
        <form onSubmit={onSubmitForm}>
            <input placeholder="Escribe algo..." value={messageText} onChange={(e) => setMessage(e.target.value)} />
            <button type="submit" >Enviar</button>
        </form>
    )
}

export default SendMessage