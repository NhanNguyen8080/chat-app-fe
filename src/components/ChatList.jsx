import ChatItem from "./ChatItem";

const ChatList = () => {
    const dummyChats = [
        {
            name: "Jacquenetta Slowgrave",
            message: "Great! Looking forward to...",
            time: "10 minutes",
            count: 8,
            avatar: "https://i.pravatar.cc/300?img=1",
        },
        {
            name: "Nickola Peever",
            message: "Sounds perfect! I've been...",
            time: "40 minutes",
            count: 2,
            avatar: "https://i.pravatar.cc/300?img=2",
        },
        {
            name: "Farand Hume",
            message: "How about 7 PM at the new...",
            time: "Yesterday",
            count: 0,
            avatar: "", // fallback will hide image
        },
        // Add more...
    ];

    return (
        <div className="bg-neutral-900 text-white w-[360px] flex flex-col rounded-lg">
            <div className="flex justify-between items-center p-4">
                <h2 className="text-xl font-bold">Chats</h2>
                <button className="bg-white text-black rounded-md px-3 py-1 text-sm">+ New</button>
            </div>
            <div className="px-4">
                <input
                    type="text"
                    placeholder="Chats search..."
                    className="w-full p-2 rounded bg-neutral-800 text-sm text-white placeholder-gray-400"
                />
            </div>
            <div className="overflow-y-auto mt-4">
                {dummyChats.map((chat, i) => (
                    <ChatItem key={i} {...chat} />
                ))}
            </div>
        </div>
    );
}

export default ChatList;
