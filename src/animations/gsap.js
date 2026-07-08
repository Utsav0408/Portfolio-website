import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let registered = false

export function registerGsap() {
  if (registered) {
    return
  }

  gsap.registerPlugin(ScrollTrigger)
  registered = true
}

export function animateReveal(scope) {
  registerGsap()

  if (!scope) {
    return () => {}
  }

  const context = gsap.context(() => {
    gsap.from('[data-gsap-reveal]', {
      opacity: 0,
      y: 32,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.08,
      scrollTrigger: {
        trigger: '[data-gsap-root]',
        start: 'top 78%',
      },
    })

    gsap.from('[data-gsap-line]', {
      scaleX: 0,
      transformOrigin: 'left center',
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '[data-gsap-root]',
        start: 'top 70%',
      },
    })
  }, scope)

  return () => context.revert()
}