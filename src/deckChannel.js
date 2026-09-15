// One broadcast channel shared by the audience window and the presenter
// window (same origin, same browser). Falls back to a no-op where the API is
// missing, such as jsdom in tests.
const name = 'globalsync2026-deck'
const bc = typeof BroadcastChannel === 'undefined' ? null : new BroadcastChannel(name)

export const deckChannel = {
  send(msg) {
    if (bc) bc.postMessage(msg)
  },
  listen(handler) {
    if (!bc) return () => {}
    const fn = (e) => handler(e.data)
    bc.addEventListener('message', fn)
    return () => bc.removeEventListener('message', fn)
  },
}
