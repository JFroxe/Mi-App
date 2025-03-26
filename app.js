let deferredPrompt;
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  console.log('👍 Se puede instalar la PWA');

  // Crear un botón para instalar manualmente
  const installBtn = document.createElement('button');
  installBtn.innerText = "Instalar PWA";
  installBtn.style.display = "block";
  document.body.appendChild(installBtn);

  installBtn.addEventListener('click', () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(choiceResult => {
      if (choiceResult.outcome === 'accepted') {
        console.log('✅ PWA instalada');
      } else {
        console.log('❌ Instalación cancelada');
      }
      deferredPrompt = null;
    });
  });
});
