(() => {
  // packages/main/src/index.js
  function src_default(Alpine) {
    console.log(Alpine);
  }

  // packages/main/builds/cdn.js
  document.addEventListener("alpine:initializing", () => {
    src_default(window.Alpine);
  });
})();
