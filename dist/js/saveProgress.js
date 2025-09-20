(function() {
  const gameId = document.body.dataset.gameId;

  if (!gameId) return;

  function saveProgress(progress) {
    const allProgress = JSON.parse(localStorage.getItem('grocerybear_games') || '{}');
    allProgress[gameId] = { ...progress, lastPlayed: new Date().toISOString() };
    localStorage.setItem('grocerybear_games', JSON.stringify(allProgress));
  }

  function loadProgress() {
    const allProgress = JSON.parse(localStorage.getItem('grocerybear_games') || '{}');
    return allProgress[gameId] || null;
  }

  window.loadProgress = loadProgress;
  window.saveProgress = saveProgress;

  window.addEventListener('beforeunload', () => {
    if (typeof window.getCurrentProgress === 'function') {
      const progress = window.getCurrentProgress();
      if (progress) saveProgress(progress);
    }
  });

  const progress = loadProgress();
  if (progress && typeof window.applyProgress === 'function') {
    window.applyProgress(progress);
  }

})();
