/**
 * auth-guard.js
 * À inclure en PREMIER script sur toutes les pages protégées.
 * Si l'utilisateur n'est pas authentifié, il est redirigé vers login.html.
 */
(function () {
  const HASH = "ba3022a13aa9890908d441aec386c64b9ed6ab0d6db729b42460cf15de4acad4";
  if (sessionStorage.getItem("auth") !== HASH) {
    const dest = encodeURIComponent(window.location.pathname.split("/").pop());
    window.location.replace("login.html?next=" + dest);
  }
})();
