


  class Resize {
    constructor (item) {
      this.resizing = false;
      this.item = item;
      this.item.style.position = 'relative';
      this.handle = this.createHandle('vertical');
      this.item.appendChild(this.handle);
      document.addEventListener('mousemove', this.resizeHandler.bind(this) );
      document.addEventListener('mouseup', (e) => this.resizing = false );
    }

    createHandle(position) {
      let el = document.createElement('span');
      el.style.position ='absolute';
      el.style.bottom = '0';
      el.style.cursor = 'pointer';
      el.style.backgroundColor='#ffff00';

      el.style.height = position == 'vertical' ? '8px' : '100%';
      el.style.width = position == 'vertical' ? '100%' : '8px';

      el.addEventListener('mousedown', this.pinHandler.bind(this));
      return el;
    }

    pinHandler(e) {
      this.resizing = true;
      this.object = this.handle;
    }

    resizeHandler(e) {
      if ( !this.resizing ) return;
      this.item.style.height =
        Math.max(e.clientY, this.item.getBoundingClientRect().top)
        - this.item.getBoundingClientRect().top
        + this.handle.getBoundingClientRect().height
        + 'px';
    }
  }

  window.addEventListener('load', () => {
    let elems = document.querySelectorAll('[data-resizeable]');
    elems.forEach(item => new Resize(item));

  });
