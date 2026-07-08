import { Component } from 'react'

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error) {
    console.error('Application crashed', error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="grid min-h-screen place-items-center px-6 text-center text-white">
          <div className="glass-surface max-w-xl rounded-[2rem] p-8">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-sky-300">
              Something went wrong
            </p>
            <h1 className="text-3xl font-semibold md:text-5xl">The experience hit a runtime issue.</h1>
            <p className="mt-4 text-sm text-slate-300">
              Refresh the page, or reopen the app. The error boundary keeps the rest of the portfolio recoverable.
            </p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}