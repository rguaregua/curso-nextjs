"use client";
import { useState } from "react";

interface CartCounterProps {
    value?: number;
}


export const CartCounter = ({value = 10}: CartCounterProps) => {
    const [counter, setCounter] = useState(value);
    return (
            <>
                <span className="text-4xl bg-gray-900 text-white p-2 rounded w-20 text-center">{counter}</span>
                <div className="flex">
                    <button className="bg-gray-600 text-white p-2 rounded hover:bg-gray-700 mx-2" onClick={() => setCounter(counter + 1)}>+1</button>
                    <button className="bg-gray-600 text-white p-2 rounded hover:bg-gray-700" onClick={() => setCounter(counter - 1)}>-1</button>    
                </div>
            </>
    )
}