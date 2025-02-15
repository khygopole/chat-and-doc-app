export default function AuthPageLayout({children} : {children : React.ReactNode}) {
    return (
        <div className="flex h-screen w-screen">
            <div className="flex justify-center items-center w-2/3 h-full">
                
            </div>
            <div className="flex bg-white w-1/3 h-full">
                {children}
            </div>
        </div>
    )

}