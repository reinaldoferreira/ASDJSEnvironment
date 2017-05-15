export default function getBaseUrl(w = window) {
  const inDev = w.location.search !== ''
  return inDev ? 'http://localhost:3030/' : '/'
}
