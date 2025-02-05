import { LuPencil } from "react-icons/lu";
import { GoPlusCircle } from "react-icons/go";

// REPLACE THESE DATA INTO ACTUAL DATA FROM DATABASE

type Tdocus = {
  id: string;
  documentName: string;
};

const sampleDocus: Tdocus[] = [
  {
    id: "1",
    documentName: "Docu1",
  },
  {
    id: "2",
    documentName: "Docu2",
  },
  {
    id: "3",
    documentName: "Docu3",
  },
  {
    id: "4",
    documentName: "Docu4",
  },
];

export default function DocumentPreview() {
  // Receive Data for Documents
  return (
    <div className="h-full w-full flex flex-col p-1">
      <div className="flex justify-center items-center">
        <LuPencil size={28} />
        <h1 className="font-bold ml-1">My Documents</h1>
      </div>
      <div className="flex justify-center items-center m-2">
        <button className="bg-[#8484FE] hover:bg-[#3b3b87] rounded-2xl p-2 text-sm">
          <GoPlusCircle className="inline mr-1" />
          Create new document
        </button>
      </div>
      <div className="mt-4 overflow-y-auto">
        {sampleDocus.map((docu) => (
          <div
            className="flex flex-col justify-center items-center mb-4"
            key={docu.id}
          >
            <button className="border-black border-solid border-[1px] w-[129px] h-[155px] bg-white shadow-lg hover:shadow-2xl" />
            <div className="">{docu.documentName}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
