import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { ToastContext } from './toast-store.js'

const TOAST_DURATION = 4800

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const removeToast = useCallback((id) => {
    setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id))
  }, [])

  const toast = useCallback(
    ({ title, message, tone = 'info' }) => {
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`

      setToasts((currentToasts) => [...currentToasts, { id, title, message, tone }])

      window.setTimeout(() => removeToast(id), TOAST_DURATION)

      return id
    },
    [removeToast],
  )

  useEffect(() => {
    return () => {
      setToasts([])
    }
  }, [])

  const value = useMemo(
    () => ({ toasts, toast, removeToast }),
    [removeToast, toast, toasts],
  )

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
}
