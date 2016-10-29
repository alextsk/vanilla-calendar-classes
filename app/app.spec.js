import {Drag} from './draggable';
import {assert} from 'chai';

describe('Test suite for draggable module', function() {
  describe('pickin up', () => {
    it('should have a pickup handler', function() {
      expect(Drag).to.exist;
    });

    it('should set the state for drag', function() {
       let event = {which : 1};
       expect(new Drag.onPickup(event)).to.be.true;
    });
  });
  xdescribe('moving');
  xdescribe('dropping');


});
