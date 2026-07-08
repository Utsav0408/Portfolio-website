export function scrollToSection(id, offset = 96) {
  if (typeof document === 'undefined') {
    return
  }

  const element = document.getElementById(id)

  if (!element) {
    return
  }

  const top = element.getBoundingClientRect().top + window.scrollY - offset

  window.scrollTo({ top, behavior: 'smooth' })
}

export function clamp(value, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max)
}