export function navigateTo(src) {
  if (src !== undefined && src !== null) {
    window.location.href = src
  }
}

export function open(url, target, features) {
  if (url !== undefined && url !== null) {
    window.open(url, target, features)
  }
}
