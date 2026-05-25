"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLenis } from "lenis/react"

export function GSAPInit() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.defaults({ ease: "power3.out" })
    ScrollTrigger.defaults({ once: true })
  }, [])

  useLenis(() => {
    ScrollTrigger.update()
  })

  return null
}
