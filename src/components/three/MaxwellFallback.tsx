import { MAXWELL_SVG } from './maxwellArt'

/**
 * Static Maxwell fallback. Renders the same illustration the 3D scene paints
 * onto its plane, surrounded by accent dance dots so the reduced-motion view
 * still reads as "spinning meme".
 */
export function MaxwellFallback() {
  return (
    <div className="grid place-items-center w-full h-full p-6">
      <div className="relative w-full max-w-[320px]">
        {/* dance dots */}
        {[
          { c: '#f5c542', x: '4%', y: '14%' },
          { c: '#e96b8e', x: '92%', y: '8%' },
          { c: '#6cc6e6', x: '96%', y: '60%' },
          { c: '#7bd389', x: '50%', y: '96%' },
          { c: '#d4a017', x: '6%', y: '74%' },
        ].map((d, i) => (
          <span
            key={i}
            aria-hidden="true"
            className="absolute w-3 h-3 rounded-full border-2 border-ink"
            style={{
              left: d.x,
              top: d.y,
              backgroundColor: d.c,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
        <div
          className="w-full h-auto"
          dangerouslySetInnerHTML={{ __html: MAXWELL_SVG }}
        />
      </div>
    </div>
  )
}
