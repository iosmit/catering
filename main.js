if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("serviceWorker.js")
      .then((reg) => console.log("The service worker is registered:", reg))
      .catch((err) => console.log("Ops, we got an error:  " + err));
  });
}
