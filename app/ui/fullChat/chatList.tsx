import Link from "next/link";
import { CiSettings } from "react-icons/ci";
import { IoChatboxOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import clsx from "clsx";

// REPLACE THESE DATA INTO ACTUAL DATA FROM DATABASE
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
    <div className="h-full w-full flex flex-col p-1">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <IoChatboxOutline size={28} />
          <h1 className="font-bold">Chats</h1>
        </div>
        <Link href={"/setting/profile"}>
          <CiSettings size={28} className="hover:text-[#8484FE]" />
        </Link>
      </div>
      <div className="border-solid border-black border-[1px] rounded-3xl w-auto my-2 mx-1 flex  py-2 bg-[#D9D9D9]">
        <FaSearch
          size={22}
          color="#978787"
          className="hidden md:flex align-top my-auto mx-2"
        />
        <input
          placeholder="Search"
          className="ml-1 mr-2 flex-1 outline-none bg-transparent w-full"
        />
      </div>

      <div className="grid place-items-center overflow-y-auto ">
        {/*CHAT HEADS */}
        {sampleChatList.map((person: TchatList) => (
          <button
            className={clsx(
              "border-solid border-black border-[1px] rounded-3xl p-2 m-1 h-[65px] w-[90%] hover:bg-[#D9D9D9]",
              { "bg-[#D9D9D9]": person.id === "1" }
            )}
            key={person.id}
          >
            <div className="flex justify-center md:flex-row md:flex-nowrap">
              <div className="border-solid border-black border-[1px] rounded-full w-12 h-12 bg-gray-500 my-auto min-w-12" />
              <div className="hidden md:flex flex-1 flex-col ml-2 w-full">
                <h1 className="w-full truncate text-left">{person.name}</h1>
                <div className="grid grid-cols-5">
                  <p className="col-span-4 text-sm w-full truncate text-gray-500 text-left">
                    {person.message}
                  </p>
                  <p className="col-span-1 text-sm justify-self-end text-gray-500">
                    11:11
                  </p>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
