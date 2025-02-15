"use client";
// STATE WRAPPER IS USED TO SHARE VALUES FROM CHILDREN COMPONENTS WITHOUT SETTING THE PAGE INTO A CLIENT COMPONENT

import { useState } from "react";
import ChatList from "@/app/ui/FullChat/ChatList";
import ConversationBox from "@/app/ui/FullChat/ConversationBox";
import DocumentPreview from "@/app/ui/FullChat/DocumentPreview";

export default function FullChatStateWrapper() {
  // STATEFUL VARIABLE FOR CONVO SELECTION
  const [selectedConvoId, setSelectedConvoId] = useState<string | null>(null);

  return (
    <main className="h-screen grid grid-cols-8 p-4">
      <div className="col-span-2 p-1 m-1 border-solid border-black rounded-xl border-[1px] overflow-hidden">
        {/*RETRIEVE THE SELECTED CONVERSATION ID FROM THE CHATLIST BY USING THE STATEWRAPPER SETTER FUNCTION*/}
        <ChatList setSelectedConvoId={setSelectedConvoId} />
      </div>
      {/*COVER THE COLUMN SPACE OF DOCUMENT PREVIEW ONCE IT GETS HIDDEN*/}
      <div className="col-span-6 md:col-span-4 m-1 border-solid border-black rounded-xl border-[1px] overflow-hidden">
        {/*PASS THE SELECTED CONVERSATION ID TAKEN FROM THE CHATLIST*/}
        <ConversationBox selectedConvoId={selectedConvoId} />
      </div>
      {/*HIDE DOCUMENT PREVIEW IF SIZE IS TOO SMALL*/}
      <div className="hidden md:flex col-span-2 p-1 m-1 border-solid border-black rounded-xl border-[1px] overflow-hidden">
        <DocumentPreview />
      </div>
    </main>
  );
}
