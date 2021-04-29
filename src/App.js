
import './App.css';


import ChatBox from "./components/ChatBox"
import GetUser from './components/getuser/GetUser';

function App() {


  if (sessionStorage.getItem("user") === null) {
    return <GetUser />
  }


  return (
    <div>
      <ChatBox></ChatBox>
    </div>

  );
}

export default App;
