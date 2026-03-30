"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export function ClientOnlyPortal({ children, selector }: {
    selector: string;
} & Readonly<{ children: React.ReactNode }>) {
    const ref = useRef<HTMLElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        ref.current = document.querySelector(selector);
        if (ref.current) setMounted(true);
    }, [selector]);

    return mounted ? createPortal(children, ref.current!) : null;
}
