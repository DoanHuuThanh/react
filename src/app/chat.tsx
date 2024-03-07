import { useState, useEffect} from "react";
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

const serverUrl = 'https://localhost:1234';

function SendMessage(message: string) {
    console.log("you send" + message)
}

interface connectProps {
    serverUrl: string,
    roomId: string
}

interface ChatRoomProps {
    roomId: string,
    theme: string
}

interface showNotificationProps {
    message: string,
    theme: string
}



function showNotification(message:string, theme: string) {
     Toastify({
           text: message,
           duration: 2000,
           gravity: 'top',
           position: 'right',
           style: {
            background: theme === 'dark'? 'black' : 'white',
            color: theme ==='dark' ? 'white' : 'black'
           }
      }).showToast()
}

function createConnection({ serverUrl, roomId }: connectProps) {
    let connectedCallback: (() => void) | undefined;
    let timeOut: ReturnType<typeof setTimeout> | undefined;
    
    
    return {
        connect() {
            timeOut = setTimeout(() =>{
                if(connectedCallback) {
                    connectedCallback()
                    console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
                }
            },100)
        },
        on(event: string,callback: ()=>void ) {
            if (connectedCallback) {
                throw Error('Cannot add the handler twice.');
              }
              if (event !== 'connected') {
                throw Error('Only "connected" event is supported.');
              }
              connectedCallback = callback;
        },

        disconnect() {
           clearTimeout(timeOut)
           console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
        }
    }
}

function ChatRoom({ roomId, theme }: ChatRoomProps) {
    const [message, setMessage] = useState('')
    useEffect(() => {
        let igoge = false
        console.log(igoge)
        const connection = createConnection({ serverUrl, roomId }) 
        connection.on('connected', () => {
            showNotification('Connected!', theme);
          });
        connection.connect()

        return () => {
            connection.disconnect()
            igoge = true  
            console.log(igoge)
        }
    }, [roomId])   

    function handleSendClick() {
        SendMessage(message)
    }

    return (
        <>
            <h1>Welcome to the {roomId} room</h1>
            <input
                value={message}
                onChange={e => setMessage(e.target.value)} 
            />
            <button onClick={handleSendClick}>Send</button>
        </>
    )
}


function ChooseRoom() {
    const [rommId, setRoomId] = useState('general')
    const [show, setShow] = useState(false)
    const [isDark, setIsDark] = useState(false);
    
    return (
        <>
           <label>
            Choose the chat room : {' '}
            <select 
               value={rommId}
               onChange={e => setRoomId(e.target.value)}
            >
                <option value="general">general</option>
                <option value="travel">travel</option>
                <option value="music">music</option>
            </select>
           </label>
           <button onClick={() => setShow(!show)}>Show rom chat</button>
           <label>
           <input
             type="checkbox"
             checked= {isDark}
             onChange={e => setIsDark(e.target.checked)} 
           />
           </label>
           {show && <hr/>}
           {show && <ChatRoom roomId= {rommId} theme={isDark? 'dark' : 'light'}  />}
        </>
    )
}
export default ChooseRoom
