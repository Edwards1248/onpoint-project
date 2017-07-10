import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class DottedPage {
  constructor() {
    this.scrollUp = $('.scroll__up');
    this.scrollMiddle = $('.scroll__middle');
    this.scrollBottom = $('.scroll__bottom');
    this.createSectionWaypoints();
  }

  createSectionWaypoints() {
    var self = this;
    var waypoint = new Waypoint({
      element: document.getElementById('two'),
      handler: function(direction) {
        if (direction=="down") {
        self.scrollUp.removeClass('scroll-item--orange');
        self.scrollMiddle.addClass('scroll-item--orange');
      } 
        else {
          self.scrollMiddle.removeClass('scroll-item--orange');
          self.scrollBottom.removeClass('scroll-item--orange');
          self.scrollUp.addClass('scroll-item--orange');
        }
  }

    })
    var waypoint2 = new Waypoint({
      element: document.getElementById('three'),
      handler: function(direction) {
        if (direction == "down") {
        self.scrollMiddle.removeClass('scroll-item--orange');
        self.scrollBottom.addClass('scroll-item--orange');
      }
        else {
          self.scrollMiddle.addClass('scroll-item--orange');
          self.scrollBottom.removeClass('scroll-item--orange');
        }
  }
    })
  }
}

export default DottedPage;

