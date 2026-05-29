import { Component, type ReactNode } from 'react'
import { CatSurprised, MemeSticker } from '@components/meme'

interface Props {
  children: ReactNode
}

interface State {
  error: Error | null
}

/**
 * Hard error boundary above the router. Catches synchronous render errors
 * before React Router gets a chance to handle them (e.g. a top-level chunk
 * fails to parse, or a provider throws). For inside-the-app errors the route
 * `errorElement` (ErrorPage) takes over instead.
 */
export class AppErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error) {
    // Log so the user sees something useful in DevTools without dumping the
    // raw stack on screen.
    console.error('[AppErrorBoundary] caught:', error)
  }

  handleReload = () => {
    window.location.reload()
  }

  render() {
    if (!this.state.error) return this.props.children

    const message =
      this.state.error.message || 'The app crashed before it could load.'

    return (
      <main className="mx-auto w-full max-w-[1200px] px-4 py-10 sm:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-5">
            <span className="inline-block self-start bg-accent-2-soft border-2 border-ink px-2 py-[2px] font-mono text-xs uppercase tracking-widest">
              error · fatal
            </span>
            <h1 className="font-display uppercase text-ink leading-none m-0 text-[clamp(40px,8vw,80px)] tracking-tight">
              The cat broke it.
            </h1>
            <p className="text-base sm:text-lg max-w-xl">
              The app refused to start. That's on me, not you. Try reloading;
              if it sticks, the build is sideways and a redeploy is coming.
            </p>
            <div className="border-3 border-ink rounded-md shadow-brutal bg-surface p-5 max-w-xl">
              <span className="font-mono text-xs uppercase tracking-widest text-muted block mb-2">
                what blew up
              </span>
              <p className="font-mono text-sm break-words leading-relaxed">
                {message}
              </p>
            </div>
            <button
              type="button"
              onClick={this.handleReload}
              className="self-start inline-flex items-center justify-center gap-2 px-5 py-3 border-3 border-ink rounded-sm bg-accent shadow-brutal font-display uppercase tracking-wide text-ink select-none transition-[transform,box-shadow] duration-200 ease-out hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-brutal-lg active:translate-x-[4px] active:translate-y-[4px] active:shadow-brutal-none"
            >
              Reload
            </button>
          </div>
          <div className="grid place-items-center">
            <MemeSticker caption="Cat reviewed the stack trace" rotate="left">
              <CatSurprised className="w-32 h-32 sm:w-40 sm:h-40" />
            </MemeSticker>
          </div>
        </div>
      </main>
    )
  }
}
