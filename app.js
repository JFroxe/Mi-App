let deferredPrompt;
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  console.log('👍 Se puede instalar la PWA en el móvil');

  // Esperar 3 segundos antes de mostrar el popup
  setTimeout(() => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(choiceResult => {
      if (choiceResult.outcome === 'accepted') {
        console.log('✅ PWA instalada');
      } else {
        console.log('❌ Instalación cancelada');
      }
      deferredPrompt = null;
    });
  }, 3000);
});
