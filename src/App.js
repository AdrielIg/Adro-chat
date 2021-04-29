
import './App.css';

import { useState } from 'react';
import { useChat } from './components/useChat';
import { db } from './Firebase';

function App() {

  const [messageText, setMessage] = useState("")
  const { loading, messages, error } = useChat()


  const onSendMessage = (e) => {
    e.preventDefault()

    db.collection("messages").add({ timestamp: Date.now(), message: messageText })


    setMessage("")
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

  messages.sort(compare);






  return (
    <div className="wrapper">
      <h1>Adro-chat</h1>
      <p>Escribi y sorprendete rey</p>
      <div className="display">
        <ul>
          {messages.map(m => <li key={m.id}>{m.message}</li>)}
        </ul>
      </div>
      <form>
        <input placeholder="Escribe algo..." value={messageText} onChange={(e) => setMessage(e.target.value)} />
        <button type="submit" onClick={onSendMessage}>Enviar</button>
      </form>
    </div>
  );
}

export default App;
