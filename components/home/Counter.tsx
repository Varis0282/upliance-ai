"use client";
import { useState } from "react";
import { Button, Box, Text, Stack } from "@chakra-ui/react";

// Wrap Chakra UI's Box
const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div
            className={`w-full h-screen flex justify-center items-center 
        transition-colors duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)]`}
            style={{
                backgroundColor: `rgba(0, 128, 255, ${Math.min(count / 20, 1)})`, // Background color updates based on count
            }}
        >
            <Stack spaceY={4} className="p-6 bg-white shadow-xl text-black rounded-lg">
                <Text fontSize="2xl" fontWeight="bold">
                    Counter: {count}
                </Text>
                <Box>
                    <Button onClick={() => setCount(count + 1)} className="m-2">
                        Increment
                    </Button>
                    <Button onClick={() => setCount(count - 1)} className="m-2">
                        Decrement
                    </Button>
                    <Button onClick={() => setCount(0)} className="m-2">
                        Reset
                    </Button>
                </Box>
            </Stack>
        </div>
    );
};

export default Counter;
