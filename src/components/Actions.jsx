import {
    RiSendPlane2Fill,
    RiEmotionLaughLine,
    RiImageFill,
} from "react-icons/ri";

const Actions = ({ handdlerSubmit, getMessage, message }) => {
    return (
        <form onSubmit={handdlerSubmit}>
            <div className="flex items-center px-3 py-2 absolute bottom-0 w-full bg-gray-800 rounded-b-lg">
                <button
                    type="button"
                    className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 transition-all duration-150"
                >
                    <RiImageFill className="w-6 h-6" />
                </button>
                <button
                    type="button"
                    className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 transition-all duration-150"
                >
                    <RiEmotionLaughLine className="w-6 h-6" />
                </button>
                <input
                    type="text"
                    onChange={(e) => getMessage(e.target.value)}
                    value={message}
                    className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none transition-all duration-150"
                    placeholder="Escribe..."
                ></input>
                <button
                    type="submit"
                    className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600 transition-all duration-150 group"
                >
                    <RiSendPlane2Fill className="h-6 w-6 group-hover:rotate-31 transition-all duration-500" />
                </button>
            </div>
        </form>
    );
};

export default Actions;
