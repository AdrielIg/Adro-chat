
import './App.css';


import ChatBox from "./components/ChatBox"
import GetUser from './components/getuser/GetUser';

function App() {




  return (

    sessionStorage.getItem("userName") ? <ChatBox /> : <GetUser />
  )



}

export default App;
