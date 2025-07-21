let deferredPrompt;
const addToHomeBtn = document.getElementById('addToHomeBtn');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  addToHomeBtn.style.display = 'inline-block';

  addToHomeBtn.addEventListener('click', () => {
    addToHomeBtn.style.display = 'none';
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('App installed');
      } else {
        console.log('App installation dismissed');
      }
      deferredPrompt = null;
    });
  });
});

// Optional redirect after install or delay
setTimeout(() => {
  if (window.matchMedia('(display-mode: standalone)').matches) {
    console.log("App is running as standalone");
    // You could redirect here if needed
    window.location.href = "https://testonics.in";
  }
}, 5000);