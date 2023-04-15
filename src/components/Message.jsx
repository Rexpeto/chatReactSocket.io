const Message = ({ message }) => {
    return (
        <div
            className={` flex rounded-lg px-4 min-w-min ${
                message.from === "Yo"
                    ? "self-end bg-green-600"
                    : "bg-blue-600 self-start"
            }`}
        >
            <p>{message.body}</p>
        </div>
    );
};

export default Message;
