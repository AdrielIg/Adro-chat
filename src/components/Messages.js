import "./Messages.css"

const Messages = (props) => {





    return (
        <div className="wrapper-message">
            {props.mensajes.map(m => {

                const user = sessionStorage.getItem("userName") === m.user

                return (
                    <div className="wrapper-msg">
                        <li className={user ? "right" : "left"} key={m.id}>
                            <p className="user">{m.user}:</p>
                            <p className={user ? "mensaje-right" : "mensaje-left"}>{m.message}</p>
                        </li>

                    </div>
                )
            })}
        </div>
    )
}

export default Messages