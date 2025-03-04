import { useEffect, useRef } from "react"
import Screen from "./Screen"
import { animate } from "motion"
import { cubicBezier } from "motion"

function App() {
  const bgRef = useRef<HTMLDivElement>(null)
  const frontRef = useRef<HTMLDivElement>(null)
  const outerRef = useRef<HTMLDivElement>(null)
  const easing = cubicBezier(.95,0,.05,1)


  useEffect(() => {
    animate(0, 1, {
      repeat: Infinity,
      repeatDelay: .2,
      duration: 1.5,
      ease: easing,
      repeatType: 'reverse',
      onUpdate: latest => {
        if (!outerRef.current) return;
        outerRef.current.style.setProperty('--progress', `${latest}`)
      }
    })
  }, [])
  return (
    <div ref={outerRef}>
      <Screen ref={frontRef} invert={true} title="Curry"/>
      <Screen ref={bgRef} title="Team"/>
    </div>
  )
}

export default App
