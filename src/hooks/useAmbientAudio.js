import { useEffect, useRef, useState } from 'react'

const STORAGE_KEY = 'avery-carter-ambient-audio'

export function useAmbientAudio() {
  const audioContextRef = useRef(null)
  const nodesRef = useRef(null)
  const [enabled, setEnabled] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }

    return window.localStorage.getItem(STORAGE_KEY) === 'true'
  })

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, String(enabled))

    if (!enabled) {
      if (nodesRef.current) {
        nodesRef.current.oscillators.forEach((oscillator) => oscillator.stop())
        nodesRef.current.gain.disconnect()
        nodesRef.current.filter.disconnect()
        nodesRef.current = null
      }

      if (audioContextRef.current) {
        void audioContextRef.current.close()
        audioContextRef.current = null
      }

      return undefined
    }

    const AudioContext = window.AudioContext || window.webkitAudioContext

    if (!AudioContext) {
      return undefined
    }

    const audioContext = new AudioContext()
    const masterGain = audioContext.createGain()
    const filter = audioContext.createBiquadFilter()
    const oscillators = [audioContext.createOscillator(), audioContext.createOscillator()]

    masterGain.gain.value = 0.018
    filter.type = 'lowpass'
    filter.frequency.value = 780

    oscillators[0].type = 'sine'
    oscillators[0].frequency.value = 110

    oscillators[1].type = 'triangle'
    oscillators[1].frequency.value = 220

    oscillators.forEach((oscillator) => {
      oscillator.connect(filter)
      oscillator.start()
    })

    filter.connect(masterGain)
    masterGain.connect(audioContext.destination)

    audioContextRef.current = audioContext
    nodesRef.current = { oscillators, gain: masterGain, filter }

    return () => {
      oscillators.forEach((oscillator) => oscillator.stop())
      masterGain.disconnect()
      filter.disconnect()
      void audioContext.close()
      audioContextRef.current = null
      nodesRef.current = null
    }
  }, [enabled])

  return {
    enabled,
    setEnabled,
    toggle: () => setEnabled((currentValue) => !currentValue),
  }
}