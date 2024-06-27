function goTo(routePath: string) {
  const trash = `${window.location.pathname}${window.location.search}`;
  const url = window.location.href.replace(trash, "");

  window.location.href = `${url}${routePath}`;
}

export const PageRouter = {
  goTo,
}