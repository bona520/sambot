"use client";

import { useEffect, useState } from "react";

import disableDevtool from "disable-devtool";
interface Props {
    children: React.ReactNode;
}

export default function DevTool({ children }: Props) {
    const [isDevToolsOpen, setIsDevToolsOpen] = useState(false);

    useEffect(() => {

        if (process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_DISABLE_DEVTOOL === "true") {
            disableDevtool({
                ondevtoolopen: () => {
                    setIsDevToolsOpen(true);
                },
                ondevtoolclose: () => {
                    setIsDevToolsOpen(false);
                },
            });
        }
    }, []);

    if (isDevToolsOpen) return <div className="w-full h-[100dvh] flex items-center justify-center" />
    return (
        <>
            {children}
        </>
    );
}