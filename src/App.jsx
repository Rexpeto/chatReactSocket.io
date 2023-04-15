import { useState, useEffect } from "react";
import io from "socket.io-client";
import Actions from "./components/Actions";
import Chat from "./components/Chat";

//* Ip del Socket con variables de entorno
const socketIp =
    `${import.meta.env.VITE_SOCKET_IP}:${import.meta.env.VITE_SOCKET_PORT}` ??
    `http://localhost:${import.meta.env.VITE_SOCKET_PORT}`;

//* Asignando la ip que debe utilizar el socket
const socket = io(socketIp);

function App() {
    const [message, getMessage] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const getMessage = (message) => {
            setMessages([...messages, message]);
        };

        socket.on("message", getMessage);

        return () => {
            socket.off("message", getMessage);
        };
    }, [messages]);

    //* Manejador de envio
    const handdlerSubmit = (e) => {
        e.preventDefault();
        socket.emit("message", message);
        setMessages([
            ...messages,
            {
                body: message,
                from: "Yo",
            },
        ]);
        getMessage("");
    };

    return (
        <div className="container mx-auto px-4 h-screen flex items-center">
            <div className="w-full h-5/6 relative text-center border border-gray-200 rounded-lg shadow bg-gray-800/60 dark:border-gray-700 backdrop-blur-lg backdrop-brightness-50 overflow-hidden">
                <Chat messages={messages} />
                <div className="z-50 w-full border-t bg-gray-700 border-gray-600">
                    <Actions
                        handdlerSubmit={handdlerSubmit}
                        getMessage={getMessage}
                        message={message}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
