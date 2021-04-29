const Messages = (props) => {




    return (
        <div className="wrapper-message">
            { props.mensajes.map(m => <li key={m.id}>{m.message}</li>)}
        </div>
    )
}

export default Messages