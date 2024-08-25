const rebuildButton = document.getElementById('pgv-rebuild');

if (rebuildButton) {
  rebuildButton.addEventListener('click', event => {
    event.preventDefault();
    const isParameterized = rebuildButton.dataset.isParameterized === 'true';
    const buildPath = `${rebuildButton.dataset.buildPath}?delay=0sec`;
    if (isParameterized) {
        window.location.href = buildPath;
    } else {
        fetch(`${buildPath}`, {
          method: 'post',
          headers: {
            [document.head.dataset.crumbHeader]: document.head.dataset.crumbValue
          }
        })
          .then(res => {
            if (!res.ok) {
              console.error('Build failed', res);
            } else {
              window.hoverNotification(rebuildButton.dataset.successMessage, rebuildButton);
            }
          })
      }
  })
}