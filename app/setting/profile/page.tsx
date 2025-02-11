export default function ProfileSetting() {
  // Add functions to the buttons
  return (
    <>
      <div className="ml-[4%] mt-[4%] flex h-full">
        <div className="border-solid border-black border-[1px] rounded-full w-[150px] h-[150px] bg-gray-500 min-w-[150px] min-h-[150px]" />
        <div className="flex flex-col ml-6 w-3/4">
          <h2 className="mb-1">Display Name</h2>
          <div className="flex">
            <input
              type="text"
              className="bg-white border-solid border-black border-[1px] mr-3 w-1/2"
            />
            <button className="py-1 w-[100px] bg-black text-white font-bold hover:bg-[#2e2e2e]">
              Apply
            </button>
          </div>
          <h2 className="mt-4 mb-1">Email</h2>
          <div className="flex">
            <input
              type="text"
              className="bg-white border-solid border-black border-[1px] mr-3 w-1/2"
            />
            <button className="py-1 w-[100px] bg-black text-white font-bold hover:bg-[#2e2e2e]">
              Change
            </button>
          </div>
          <h2 className="mt-4 mb-1">Password</h2>
          <button className="py-1 bg-black text-white font-bold w-[150px] hover:bg-[#2e2e2e]">
            Change Password
          </button>
        </div>
      </div>
    </>
  );
}
