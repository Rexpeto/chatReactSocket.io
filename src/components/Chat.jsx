import Message from "./Message";

const Chat = ({ messages }) => {
    return (
        <div className="overflow-y-scroll h-[93%] flex flex-col px-4 gap-3 py-[1.5rem]">
            {messages.map((message, index) => (
                <Message key={index} message={message} />
            ))}
        </div>
    );
};

export default Chat;
