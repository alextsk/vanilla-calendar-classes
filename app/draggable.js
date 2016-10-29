export class Drag {
  constructor(draggables, dropzones) {
    this.dragging = false;
    this.x = 0;
    this.y = 0;
    this.dropzones = dropzones;
    this.avatar = null;
    draggables.forEach( draggable => {
      draggable.addEventListener('mousedown', this.onPickup.bind(this));
    });

    document.addEventListener('mouseup', this.onDrop.bind(this));

    document.addEventListener('mousemove', this.onDrag.bind(this));
  }

  onPickup(e) {
    this.dragging = true;
    this.activeElement = e.currentTarget;
    this.avatar = e.currentTarget.cloneNode(true);
    this.avatar.style.position = 'absolute';
    document.body.appendChild(this.avatar);
  }

  onDrag(e) {
    if (!this.dragging) return;

    this.x = e.clientX;
    this.y = e.clientY;
    //debugger;
    this.avatar.style.top = this.y + 'px';
    this.avatar.style.left = this.x + 'px';

    let maybeDrop = this.tryToFindDropZone();
    if (!maybeDrop) {
      if (this.currentDropZone) {
        this.currentDropZone.style.backgroundColor = this.back || this.currentDropZone.style.backgroundColor;
      }
      this.currentDropZone = null;
    } else {
      if (this.currentDropZone !== maybeDrop) {
        this.back = getComputedStyle(maybeDrop).backgroundColor;
        this.currentDropZone = maybeDrop;
        this.currentDropZone.style.backgroundColor = '#ff9932';
      }
    }
  }

  onDrop(e) {
    if (!this.dragging) return;
    this.dragging = false;
    if (!this.currentDropZone) return;

    console.info('drop on ', this.x, this.y);
    this.currentDropZone.style.backgroundColor = this.back;
    this.dropSuccess(this.avatar, this.currentDropZone);
  }

  dropSuccess() {
    console.log('set your own callback(avatar, dropzone)');
  }

  tryToFindDropZone(e) {
    this.avatar.style.display = 'none';
    let res =  this.isDropzone(document.elementFromPoint(this.x, this.y));
    this.avatar.style.display = 'block';
    return res;
  }

  isDropzone(element) {
    for (let i = 0; i < this.dropzones.length; i++) {
      if (this.dropzones[i].contains(element)) return this.dropzones[i];
    }
    return false;
  }
}