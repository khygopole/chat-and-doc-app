import { CiImageOn } from "react-icons/ci";
import { IoMdSend } from "react-icons/io";

// Create interface to read activated chat head from chatlist via statewrapper
interface ConvoBoxProp {
  selectedConvoId: string | null;
}

// REPLACE THESE WITH ACTUAL DATA FROM DATABASE
type TconversationBox = {
  [id: string]: {
    id: string;
    name: string;
    message: string;
    dateSent: Date;
  }[];
};

export default function ConversationBox(props: ConvoBoxProp) {
  // REPLACE WITH AN ACTUAL DATA
  const sampleConversation: TconversationBox[] = [
    {
      "1": [
        {
          id: "1",
          name: "User 1",
          message: "This is your 1st message",
          dateSent: new Date(2025, 1, 5, 16, 41),
        },
        {
          id: "2",
          name: "Me",
          message: "This is my 1st message",
          dateSent: new Date(2025, 1, 5, 16, 42),
        },
        {
          id: "3",
          name: "Me",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque asperiores autem rem deleniti! Nam magni illum tempore, qui rerum maiores numquam architecto voluptates reiciendis iusto. Nemo necessitatibus vitae suscipit voluptatem",
          dateSent: new Date(2025, 1, 5, 16, 44),
        },
        {
          id: "4",
          name: "User 1",
          message:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti necessitatibus nemo iste exercitationem maiores, saepe, odio sit deleniti obcaecati soluta nobis tenetur assumenda facere voluptatibus cumque laboriosam quidem eaque voluptates.",
          dateSent: new Date(2025, 1, 5, 16, 43),
        },
        {
          id: "5",
          name: "User 1",
          message: "This is your 1st message",
          dateSent: new Date(2025, 1, 5, 16, 41),
        },
        {
          id: "6",
          name: "Me",
          message: "This is my 1st message",
          dateSent: new Date(2025, 1, 5, 16, 42),
        },
        {
          id: "7",
          name: "Me",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque asperiores autem rem deleniti! Nam magni illum tempore, qui rerum maiores numquam architecto voluptates reiciendis iusto. Nemo necessitatibus vitae suscipit voluptatem",
          dateSent: new Date(2025, 1, 5, 16, 44),
        },
        {
          id: "8",
          name: "User 1",
          message:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti necessitatibus nemo iste exercitationem maiores, saepe, odio sit deleniti obcaecati soluta nobis tenetur assumenda facere voluptatibus cumque laboriosam quidem eaque voluptates.",
          dateSent: new Date(2025, 1, 5, 16, 43),
        },
      ],
    },
    {
      "2": [
        {
          id: "1",
          name: "User 2",
          message: "This is your 1st message",
          dateSent: new Date(2025, 1, 5, 16, 41),
        },
        {
          id: "2",
          name: "Me",
          message: "This is my 1st message",
          dateSent: new Date(2025, 1, 5, 16, 42),
        },
        {
          id: "3",
          name: "Me",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque asperiores autem rem deleniti! Nam magni illum tempore, qui rerum maiores numquam architecto voluptates reiciendis iusto. Nemo necessitatibus vitae suscipit voluptatem",
          dateSent: new Date(2025, 1, 5, 16, 44),
        },
        {
          id: "4",
          name: "User 2",
          message:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti necessitatibus nemo iste exercitationem maiores, saepe, odio sit deleniti obcaecati soluta nobis tenetur assumenda facere voluptatibus cumque laboriosam quidem eaque voluptates.",
          dateSent: new Date(2025, 1, 5, 16, 43),
        },
        {
          id: "5",
          name: "User 2",
          message: "This is your 1st message",
          dateSent: new Date(2025, 1, 5, 16, 41),
        },
        {
          id: "6",
          name: "Me",
          message: "This is my 1st message",
          dateSent: new Date(2025, 1, 5, 16, 42),
        },
        {
          id: "7",
          name: "Me",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque asperiores autem rem deleniti! Nam magni illum tempore, qui rerum maiores numquam architecto voluptates reiciendis iusto. Nemo necessitatibus vitae suscipit voluptatem",
          dateSent: new Date(2025, 1, 5, 16, 44),
        },
        {
          id: "8",
          name: "User 2",
          message:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti necessitatibus nemo iste exercitationem maiores, saepe, odio sit deleniti obcaecati soluta nobis tenetur assumenda facere voluptatibus cumque laboriosam quidem eaque voluptates.",
          dateSent: new Date(2025, 1, 5, 16, 43),
        },
      ],
    },
    {
      "3": [
        {
          id: "1",
          name: "User 3",
          message: "This is your 1st message",
          dateSent: new Date(2025, 1, 5, 16, 41),
        },
        {
          id: "2",
          name: "Me",
          message: "This is my 1st message",
          dateSent: new Date(2025, 1, 5, 16, 42),
        },
        {
          id: "3",
          name: "Me",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque asperiores autem rem deleniti! Nam magni illum tempore, qui rerum maiores numquam architecto voluptates reiciendis iusto. Nemo necessitatibus vitae suscipit voluptatem",
          dateSent: new Date(2025, 1, 5, 16, 44),
        },
        {
          id: "4",
          name: "User 3",
          message:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti necessitatibus nemo iste exercitationem maiores, saepe, odio sit deleniti obcaecati soluta nobis tenetur assumenda facere voluptatibus cumque laboriosam quidem eaque voluptates.",
          dateSent: new Date(2025, 1, 5, 16, 43),
        },
        {
          id: "5",
          name: "User 3",
          message: "This is your 1st message",
          dateSent: new Date(2025, 1, 5, 16, 41),
        },
        {
          id: "6",
          name: "Me",
          message: "This is my 1st message",
          dateSent: new Date(2025, 1, 5, 16, 42),
        },
        {
          id: "7",
          name: "Me",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque asperiores autem rem deleniti! Nam magni illum tempore, qui rerum maiores numquam architecto voluptates reiciendis iusto. Nemo necessitatibus vitae suscipit voluptatem",
          dateSent: new Date(2025, 1, 5, 16, 44),
        },
        {
          id: "8",
          name: "User 3",
          message:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti necessitatibus nemo iste exercitationem maiores, saepe, odio sit deleniti obcaecati soluta nobis tenetur assumenda facere voluptatibus cumque laboriosam quidem eaque voluptates.",
          dateSent: new Date(2025, 1, 5, 16, 43),
        },
      ],
    },
  ];

  // Placeholder for authenticated user
  const userName = "Me";

  // SELECT THE ACTIVATED CONVO BASED ON THE
  const selectedConvo = sampleConversation.find(
    (convo) => props.selectedConvoId && props.selectedConvoId in convo
  );

  // Sort by date sent in descending order since this will be styled
  const sortedSelectedConvo =
    selectedConvo &&
    props.selectedConvoId &&
    selectedConvo[props.selectedConvoId].sort(
      (a, b) => b.dateSent.getTime() - a.dateSent.getTime()
    );

  return (
    <div className="h-full w-full flex flex-col">
      {sortedSelectedConvo ? (
        <>
          <div className="w-full bg-[#8484FE] rounded-t-xl flex justify-start p-2">
            <div className="mx-1 border-solid border-black border-[1px] rounded-full w-8 h-8 bg-gray-500 my-auto min-w-8" />
            {/*REPLACE INTO THE NAME OF ONE BEING CHATTED*/}
            <h1 className="font-bold my-auto ml-2">{`User ${props.selectedConvoId}`}</h1>
          </div>
          {/*REVERSE DESCENDING ORDER MESSAGE TO SET THE DEFAULT SCROLL TO THE BOTTOM OF THE CONTAINER*/}
          <div className="flex-1 overflow-y-auto flex flex-col-reverse">
            {/*CHAT MESSAGES*/}
            {sortedSelectedConvo &&
              props.selectedConvoId &&
              sortedSelectedConvo.map((chatMessage) => (
                <div key={chatMessage.id}>
                  {chatMessage.name === userName ? (
                    <>
                      {/*MY MESSAGE*/}
                      <div className="relative group m-1 ml-auto max-w-[75%] border-solid border-black border-[1px] rounded-xl p-1 bg-[#D9D9D9] mr-2 w-fit">
                        <p className="text-sm m-1">{chatMessage.message}</p>
                        <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs p-2 rounded-md right-full mr-2 top-1/2 transform -translate-y-1/2 whitespace-nowrap">
                          {chatMessage.dateSent.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/*YOUR MESSAGE*/}
                      <div className="flex m-1">
                        <div className="mx-1 border-solid border-black border-[1px] rounded-full w-8 h-8 bg-gray-500 mt-auto min-w-8" />
                        <div className="flex flex-col w-full">
                          <p className="text-[#615A5A] text-xs">
                            {chatMessage.name}
                          </p>
                          <div className="relative group max-w-[75%] border-solid border-black border-[1px] rounded-xl p-1 w-fit">
                            <p className="text-sm m-1">{chatMessage.message}</p>
                            <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs p-2 rounded-md left-full ml-2 top-1/2 transform -translate-y-1/2 whitespace-nowrap">
                              {chatMessage.dateSent.toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
          </div>
          <div className="flex justify-start items-center w-auto m-3 border-solid border-black border-[2px] bg-[#D9D9D9] rounded-3xl p-1">
            <button>
              <CiImageOn size={25} className="hover:text-[#8484FE]" />
            </button>
            <input
              placeholder="Enter message"
              className="flex-1 outline-none bg-transparent mx-3"
            />
            <button>
              <IoMdSend size={25} className="hover:text-[#8484FE]" />
            </button>
          </div>
        </>
      ) : (
        <h1 className="flex justify-center my-auto">NO SELECTED CHAT</h1>
      )}
    </div>
  );
}
