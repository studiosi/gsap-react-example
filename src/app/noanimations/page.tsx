'use client'

import {useRef} from "react"

export default function Home() {
    const container = useRef(null)

    return (
        <main ref={container}>
            <div>
                <a className="underline" href="/">Return to home page</a>
            </div>
        </main>
    );
}
