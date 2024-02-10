
export function scrollIntoView(target: string) {
  const el = document.querySelector(target)

  el?.scrollIntoView({ behavior: 'smooth' })
}