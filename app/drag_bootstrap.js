import {Drag} from './draggable';

window.onload = () => {
  let drag = new Drag(
    document.querySelectorAll('[data-drag-role="draggable"]'),
    document.querySelectorAll('[data-drag-role="dropzone"]')
  );
  drag.dropSuccess = (avatar, dropzone) => {
    avatar.remove();
    let oldColor = dropzone.style.background;
    dropzone.style.background = 'red';
    setTimeout( () => dropzone.style.background = oldColor , 1000);
  }
};


