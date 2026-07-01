"use client"

import { useLayoutEffect, useRef } from "react"
import createGlobe, { COBEOptions } from "cobe"
import { useMotionValue, useSpring } from "motion/react"

import { cn } from "@/lib/utils"

const MOVEMENT_DAMPING = 1400
const MAX_INIT_ATTEMPTS = 100

const GLOBE_CONFIG: COBEOptions = {
  width: 1000,
  height: 1000,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string
  config?: COBEOptions
}) {
  const phiRef = useRef(0)
  const widthRef = useRef(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)
  const initAttemptsRef = useRef(0)

  const r = useMotionValue(0)
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  })

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab"
    }
  }

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      r.set(r.get() + delta / MOVEMENT_DAMPING)
    }
  }

  useLayoutEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    let frameId = 0
    let destroyed = false
    const retryTimeouts: ReturnType<typeof setTimeout>[] = []

    const getSize = () => {
      const width = container.offsetWidth
      const height = container.offsetHeight
      return width > 0 ? width : height
    }

    const destroyGlobe = () => {
      globeRef.current?.destroy()
      globeRef.current = null
    }

    const createGlobeInstance = (size: number) => {
      destroyGlobe()
      widthRef.current = size

      globeRef.current = createGlobe(canvas, {
        ...config,
        width: size * 2,
        height: size * 2,
        onRender: (state) => {
          if (!pointerInteracting.current) phiRef.current += 0.005
          state.phi = phiRef.current + rs.get()
          state.width = widthRef.current * 2
          state.height = widthRef.current * 2
        },
      })

      canvas.style.opacity = "1"
    }

    const ensureGlobe = (): boolean => {
      if (destroyed || globeRef.current) return Boolean(globeRef.current)

      const size = getSize()
      if (size === 0) return false

      createGlobeInstance(size)
      return true
    }

    const scheduleEnsureGlobe = () => {
      if (ensureGlobe() || destroyed || initAttemptsRef.current >= MAX_INIT_ATTEMPTS) {
        return
      }

      initAttemptsRef.current += 1
      frameId = requestAnimationFrame(scheduleEnsureGlobe)
    }

    const handleResize = () => {
      const size = getSize()
      if (size === 0) return

      if (!globeRef.current) {
        ensureGlobe()
        return
      }

      widthRef.current = size
    }

    const handleContextLost = (event: Event) => {
      event.preventDefault()
      destroyGlobe()
      if (!destroyed) {
        retryTimeouts.push(setTimeout(() => ensureGlobe(), 100))
      }
    }

    const handleContextRestored = () => {
      if (!destroyed) {
        ensureGlobe()
      }
    }

    canvas.addEventListener("webglcontextlost", handleContextLost)
    canvas.addEventListener("webglcontextrestored", handleContextRestored)

    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(container)

    initAttemptsRef.current = 0
    scheduleEnsureGlobe()
    retryTimeouts.push(setTimeout(handleResize, 100))
    retryTimeouts.push(setTimeout(handleResize, 500))

    window.addEventListener("load", handleResize)

    return () => {
      destroyed = true
      cancelAnimationFrame(frameId)
      retryTimeouts.forEach(clearTimeout)
      window.removeEventListener("load", handleResize)
      canvas.removeEventListener("webglcontextlost", handleContextLost)
      canvas.removeEventListener("webglcontextrestored", handleContextRestored)
      resizeObserver.disconnect()
      destroyGlobe()
    }
  }, [config, rs])

  return (
    <div
      ref={containerRef}
      className={cn("relative h-full w-full", className)}
    >
      <canvas
        className="h-full w-full opacity-0 transition-opacity duration-500"
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX
          updatePointerInteraction(e.clientX)
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  )
}
