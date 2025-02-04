import { CiSettings } from "react-icons/ci";
import { IoChatboxOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

// Fix Scroll and Fix Search Icon

type TchatList = {
  id: string;
  name: string;
  message: string;
};

const sampleChatList: TchatList[] = [
  {
    id: "1",
    name: "User 1",
    message: "This is my message btw 112344556678",
  },
  {
    id: "2",
    name: "User 2",
    message: "This is my message btw 112344556678",
  },
  {
    id: "3",
    name: "User 3",
    message: "This is my message btw 112344556678",
  },
  {
    id: "4",
    name: "User 4",
    message: "This is my message btw 112344556678",
  },
  {
    id: "5",
    name: "User 5",
    message: "This is my message btw 112344556678",
  },
  {
    id: "6",
    name: "User 6",
    message: "This is my message btw 112344556678",
  },
  {
    id: "7",
    name: "User 7",
    message: "This is my message btw 112344556678",
  },
  {
    id: "8",
    name: "User 8",
    message: "This is my message btw 112344556678",
  },
  {
    id: "9",
    name: "User 9",
    message: "This is my message btw 112344556678",
  },
  {
    id: "10",
    name: "User 10",
    message: "This is my message btw 112344556678",
  },
];

export default function ChatList() {
  // Receive data for chat lists then map
  return (
    <div className="h-full w-full p-1">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <IoChatboxOutline size={28} />
          <h1 className="font-bold">Chats</h1>
        </div>
        <button>
          <CiSettings size={28} />
        </button>
      </div>
      <div className="flex flex-col items-center justify-center">
        <input
          placeholder=" Search"
          className="border-solid border-black border-[1px] rounded-3xl w-full my-2 mx-1"
        />
        <div className="h-full w-full">
          {/*CHAT HEADS */}
          {sampleChatList.map((person: TchatList) => (
            <div
              className="border-solid border-black border-[1px] rounded-3xl p-2 m-1 h-[65px]"
              key={person.id}
            >
              <div className="flex justify-center md:flex-row md:flex-nowrap">
                <div className="border-solid border-black border-[1px] rounded-full w-12 h-12 bg-gray-500 my-auto min-w-12" />
                <div className="hidden md:flex flex-1 flex-col ml-2 w-full">
                  <h1 className="w-full truncate">{person.name}</h1>
                  <div className="grid grid-cols-5">
                    <p className="col-span-4 text-sm w-full truncate text-gray-500">
                      {person.message}
                    </p>
                    <p className="col-span-1 text-sm justify-self-end text-gray-500">
                      11:11
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
