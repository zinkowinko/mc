function saveGameProgress(gameId, progress) {
  const allProgress = JSON.parse(localStorage.getItem('grocerybear_games') || '{}');
  allProgress[gameId] = { ...progress, lastPlayed: new Date().toISOString() };
  localStorage.setItem('grocerybear_games', JSON.stringify(allProgress));
}

function loadGameProgress(gameId) {
  const allProgress = JSON.parse(localStorage.getItem('grocerybear_games') || '{}');
  return allProgress[gameId] || null;
}

function loadAllProgress() {
  return JSON.parse(localStorage.getItem('grocerybear_games') || '{}');
}
