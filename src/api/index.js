const LOCALESTORAGE_KEY = 'tasks';
export function sendStorage(messege) {
  let arrayStorage = getDataStorage();
  arrayStorage.push(messege);
  localStorage.setItem(LOCALESTORAGE_KEY, JSON.stringify(arrayStorage));
}

export function getDataStorage() {
  const dataJson = localStorage.getItem(LOCALESTORAGE_KEY);
  return dataJson ? JSON.parse(dataJson) : [];
}
