export function setSession(name, value) {
  sessionStorage.setItem(name, JSON.stringify(value));
}

export function checkSession(name, next) {
  const isSessionEmpty = sessionStorage.getItem(name);
  if (isSessionEmpty) {
    return next();
  }
}

export function deleteSession(name) {
  sessionStorage.removeItem(name);
}
