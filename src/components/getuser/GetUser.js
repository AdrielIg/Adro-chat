import "./GetUser.css"
import GetUserInput from "./GetUserInput"

const GetUser = () => {
    return (
        <div className="wrapper-user">
            <h2 className="header-user">Por Favor Introduzca su Usuario</h2>
            <GetUserInput />
            <p className="text-user" >Se cerrara sesión al cerrar el navegador</p>s
        </div>
    )
}

export default GetUser