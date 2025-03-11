"use client"

import { SliderBar } from "@/components/passwords/SliderBar";
import { SwitchInput } from "@/components/passwords/SwitchInput";
import { useEffect, useState } from "react";

const ClientServerRender = () => {

    const [inputValue, setInputValue] = useState<string>("");
    const [lengthPass, setLengthPass] = useState<number>(10);

    // switches
    const [uppercase, setUppercase] = useState<boolean>(true);
    const [lowercase, setLowercase] = useState<boolean>(true);
    const [numbers, setNumbers] = useState<boolean>(true);
    const [symbols, setSymbols] = useState<boolean>(true);
    const [showMessage, setShowMessage] = useState<boolean>(false);

    useEffect(()=>{
        generatePassword();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[lengthPass, uppercase, lowercase, numbers, symbols]);

    const generatePassword = () => {
        let characters = "";

        if(uppercase) {
            characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }

        if (lowercase) {
            characters += "abcdefghijklmnopqrstuvwxyz";
        }

        if (numbers) {
            characters += "0123456789";
        }

        if (symbols) {
            characters += "!@#$%^&*()"
        }

        let password = '';

        for(let index=0; index < lengthPass; index++){
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        setInputValue(password);
    }

    const copyPassword = () => {
        navigator.clipboard.writeText(inputValue);
        setShowMessage(true);
    }

    return(
        <div className="bg-slate-100 w-full h-screen flex justify-center items-center">
            <div className="border rounded border-gray-500 p-5">
                <h2>Password Generator</h2>
                <hr />
                <div className="flex">
                    <input 
                        type="text" 
                        value={inputValue} 
                        onChange={e => setInputValue(e.target.value)}
                        placeholder="New Password" 
                        className="rounded p-2 my-2 border" />
                    <button className="w-20 flex text-center justify-center items-center" onClick={copyPassword}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
                        stroke="currentColor" className="size-6 text-gray-400 hover:text-gray-800">
                        <path strokeLinecap="round" 
                        strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                        </svg>
                    </button>
                </div>

                <SliderBar value={lengthPass} changeValue={setLengthPass}/>

                <div className="flex justify-between pb-3">
                    <SwitchInput title="Uppercase" value={uppercase} changeValue={setUppercase}/>
                    <SwitchInput title="Lowercase" value={lowercase} changeValue={setLowercase}/>
                </div>

                <div className="flex justify-between pb-3">
                    <SwitchInput title="Numbers" value={numbers} changeValue={setNumbers}/>
                    <SwitchInput title="Symbols" value={symbols} changeValue={setSymbols}/>
                </div>

                <button className="w-full rounded bg-blue-500 text-white p-2" onClick={generatePassword}>Generate</button>
            </div>

            <div className="absolute bottom-5 right-5 gap-5">
                    {
                        showMessage && ( 
                        <p className="bg-green-500 text-white p-2 rounded w-full text-center mt-5 text-sm flex justify-between">
                            <span>Password copied!</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                            className="size-6 hover:cursor-pointer"
                            onClick={() => setShowMessage(false)}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </p>
                        )}
                    


                </div>
        </div>
    );
}

export default ClientServerRender;