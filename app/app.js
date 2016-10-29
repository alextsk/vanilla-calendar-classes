import {Drag} from './draggable';

window.onload = () => {
  new Drag(
    document.querySelectorAll('[data-drag-role="draggable"]'),
    document.querySelectorAll('[data-drag-role="dropzone"]')
  );
  //let a = new Draggable('draggable');
};




