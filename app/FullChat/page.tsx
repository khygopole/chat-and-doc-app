import ChatList from "@/app/ui/fullChat/chatList";
import PreviewDocu from "@/app/ui/fullChat/previewDocu";

export default function FullChatPage() {
  return (
    <main className="h-screen grid grid-cols-8 p-4">
      <div className="col-span-2 p-1 border-solid border-black border-[1px] overflow-hidden">
        <ChatList />
      </div>
      <div className="col-span-4">
        <h1>COVERSATION AREA HERE</h1>
      </div>
      <div className="col-span-2 p-1 border-solid border-black border-[1px] overflow-hidden">
        <PreviewDocu />
      </div>
    </main>
  );
}
