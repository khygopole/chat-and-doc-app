"use client"

import { useState } from "react";

export default function SignupPage() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 w-full">
            <div>
                <div></div>
                <h1 className="text-3xl font-bold text-black p-4">Sign up</h1>
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
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full p-4 border-black border-2 border-solid text-black my-1"
                >
                </input>
            </div>

            <div className="items-center justify-center w-4/5 my-2">
                <button className="w-full p-4 bg-black text-white mx-auto">
                    Sign Up
                </button>
            </div>

            <div className="w-4/5 flex flex-col items-center justify-center my-4">
                <p className="text-center text-black">or</p>
            </div>

            <div className="w-4/5 flex gap-x-2">
                <button className="w-1/2 h-full p-4 bg-white text-black text-center border-2 border-black border-solid">
                    Continue with Google 
                </button>
                <button className="w-1/2 h-full p-4 bg-white text-black text-center border-2 border-black border-solid">
                    Continue with Github 
                </button>
            </div>
            <div className="w-1/2 flex flex-col items-center justify-center my-8">
                <p className="text-center text-black">Already have an account?</p>
                <div className="text-center text-black underline">
                    <a href="/login">
                        Login
                    </a>
                </div>
            </div>
        </div>
    );
};

