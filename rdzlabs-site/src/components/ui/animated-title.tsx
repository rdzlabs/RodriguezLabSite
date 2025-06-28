import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type AnimatedTitleProps = {
  from: string
  to: string
}

export default function AnimatedTitle({ from, to }: AnimatedTitleProps) {
  const [phase, setPhase] = useState<"typing" | "waiting" | "transitioning" | "done">("typing")
  const [typed, setTyped] = useState("")

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (phase === "typing") {
      if (typed.length < from.length) {
        timeout = setTimeout(() => {
          setTyped(from.slice(0, typed.length + 1))
        }, 100)
      } else {
        timeout = setTimeout(() => {
          setPhase("waiting")
        }, 1000)
      }
    } else if (phase === "waiting") {
      timeout = setTimeout(() => {
        setPhase("transitioning")
      }, 600)
    }

    return () => clearTimeout(timeout)
  }, [phase, typed, from])

  return (
    <div >
      <AnimatePresence mode="wait">
        {phase === "typing" || phase === "waiting" ? (
          <motion.span
            key="from"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {typed}
            {phase !== "waiting" && <span className="animate-pulse">|</span>}
          </motion.span>
        ) : (
          <motion.span
            key="to"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {to}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  )
}
