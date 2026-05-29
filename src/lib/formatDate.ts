/**
 * Convert "YYYY-MM" or "Present" into a human label like "May 2026" / "Present".
 */
export function formatYearMonth(value: string): string {
  if (value === 'Present') return 'Present'
  const [year, month] = value.split('-')
  if (!year || !month) return value
  const d = new Date(Number(year), Number(month) - 1, 1)
  return d.toLocaleString('en-US', { month: 'short', year: 'numeric' })
}

export function formatRange(start: string, end: string | 'Present'): string {
  return `${formatYearMonth(start)} — ${formatYearMonth(end)}`
}
