const Chat = ({messages}) => {
    return (
        <div className="overflow-y-scroll h-[93%] flex flex-col px-4 gap-3 py-[1.5rem]">
            <div className="bg-blue-600 flex rounded-lg px-4 max-w-[100px]">
                <p>Prueba</p>
            </div>
            <div className="bg-green-600 flex px-4 max-w-[100px] rounded-lg self-end">
                <p>Prueba</p>
            </div>
        </div>
    );
};

export default Chat;
