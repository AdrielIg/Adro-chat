import { useState } from "react"
import addUser from "../../img/add-user.png"


const GetUserInput = () => {
    const [user, setUser] = useState()


    return (
        <form>
            <input placeholder="Inserte Usuario" value={user} onChange={(e) => setUser(e.target.value)} />
            <button> <img src={addUser} /> </button>
        </form>
    )
}

export default GetUserInput