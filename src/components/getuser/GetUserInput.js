import { useState } from "react"
import addUser from "../../img/add-user.png"


const GetUserInput = () => {
    const [user, setUser] = useState()

    const getUserName = () => {
        sessionStorage.setItem("userName", user)
    }


    return (
        <form onSubmit={getUserName}>
            <input placeholder="Inserte Usuario" value={user} onChange={(e) => setUser(e.target.value)} />
            <button className="button-user" > <img src={addUser} /> </button>
        </form>
    )
}

export default GetUserInput