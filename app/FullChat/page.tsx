import ChatList from "@/app/ui/FullChat/ChatList";
import DocumentPreview from "@/app/ui/FullChat/DocumentPreview";
import ConversationBox from "@/app/ui/FullChat/ConversationBox";

export default function FullChatPage() {
  return (
    <main className="h-screen grid grid-cols-8 p-4">
      <div className="col-span-2 p-1 m-1 border-solid border-black rounded-xl border-[1px] overflow-hidden">
        <ChatList />
      </div>
      {/*COVER THE COLUMN SPACE OF DOCUMENT PREVIEW ONCE IT GETS HIDDEN*/}
      <div className="col-span-6 md:col-span-4 m-1 border-solid border-black rounded-xl border-[1px] overflow-hidden">
        <ConversationBox />
      </div>
      {/*HIDE DOCUMENT PREVIEW IF SIZE IS TOO SMALL*/}
      <div className="hidden md:flex col-span-2 p-1 m-1 border-solid border-black rounded-xl border-[1px] overflow-hidden">
        <DocumentPreview />
      </div>
    </main>
  );
}
