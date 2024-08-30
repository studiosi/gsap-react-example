'use client'

import {useId, useRef} from "react"
import gsap from 'gsap'
import {useGSAP} from "@gsap/react";

export default function Home() {
  const uniqueId = useId()
  const container = useRef(null)

  gsap.registerPlugin(useGSAP)

  useGSAP(
      () => {
        gsap.to(`#square-${CSS.escape(uniqueId)}`, { x: 500, duration: 2 })
      },
      {scope: container}
  )

  return (
    <main ref={container} className="w-[600px] h-[100px] bg-amber-200">
        <div className="w-[100px] h-[100px] bg-red-600"  id={`square-${uniqueId}`}>&nbsp;</div>
        <div className="mt-5">
            <a className="underline" href="/noanimations">Go to page with no animations</a>
        </div>
    </main>
  );
}
