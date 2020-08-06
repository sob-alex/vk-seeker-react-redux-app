console.log(window.location.href);

if (window.location.hash) {
  console.log(window.location.hash);
  localStorage.setItem('token', window.location.hash.slice(7));

  window.location.href = '/';
}
