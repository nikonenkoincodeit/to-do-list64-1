import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import { formRef } from './refs';
import { sendStorage, getDataStorage } from './api';

formRef.addEventListener('submit', event => {
  event.preventDefault();
  const formVlaue = event.target.message.value.trim();
  if (!formVlaue) {
    return;
  }
  event.target.reset();
  const manufactureData = manufucture(formVlaue);
  sendStorage(manufactureData);

  console.log(formVlaue);
});

function manufucture(value) {
  return { value, checked: false, id: Date.now() };
}
