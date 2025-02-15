"use client"

import { useState } from "react";

export default function SignupPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 w-full">
            <div>
                <div></div>
                <h1 className="text-3xl font-bold text-black p-4">Log in</h1>
            </div>

            <div className="flex flex-col items-center justify-center w-4/5">
                <input
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-4 border-black border-2 border-solid text-black my-1"
                >
                </input>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-4 border-black border-2 border-solid text-black my-1"
                >
                </input>
            </div>

            <div className="items-center justify-center w-4/5 my-2">
                <button className="w-full p-4 bg-black text-white mx-auto">
                    Log in
                </button>
            </div>

            <div className="w-1/2 flex flex-col items-center justify-center my-8">
                <p className="text-center text-black">Don't have an account?</p>
                <div className="text-center text-black underline">
                    <a href="/signup">
                        Sign up
                    </a>
                </div>
            </div>
        </div>
    );
};

