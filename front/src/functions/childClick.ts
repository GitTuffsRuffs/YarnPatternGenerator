export default (event: Event) => {
  if(!event.target) {
    return;
  }
  if (event.target !== event.currentTarget) {
    return;
  }
  const li = event.target as HTMLLIElement;
  const a = li.firstChild;

  if(!a) {
    return;
  }
  if(!(a instanceof HTMLAnchorElement)) {
    return;
  }
  a.click();
}