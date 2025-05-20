const ChatItem = ({ name, message, time, count, avatar }) => {
    return (
        <div className="flex items-center px-4 py-3 hover:bg-neutral-800 cursor-pointer">
            <img
                src={avatar}
                alt={name}
                className="w-10 h-10 rounded-full"
                onError={(e) => (e.target.style.display = "none")}
            />
            <div className="ml-3 flex-1">
                <div className="flex justify-between">
                    <p className="font-semibold text-white">{name}</p>
                    <span className="text-xs text-gray-400">{time}</span>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-400 truncate max-w-[180px]">{message}</p>
                    {count > 0 && (
                        <span className="text-sm bg-green-600 text-white px-2 rounded-full ml-2">
                            {count}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ChatItem;
