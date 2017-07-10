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
        self.scrollUp.toggleClass('scroll-item--orange');
        self.scrollMiddle.toggleClass('scroll-item--orange');
  }
    })
    var waypoint2 = new Waypoint({
      element: document.getElementById('three'),
      handler: function(direction) {
        self.scrollMiddle.toggleClass('scroll-item--orange');
        self.scrollBottom.toggleClass('scroll-item--orange');
  }
    })
  }
}

/*
var waypoint = new Waypoint({
  element: document.getElementById('three'),
  handler: function(direction) {
    var scrollUp = $('.scroll__up');
    scroll__up.removeClass('scroll-item--orange');
  }
})

class DottedPage {
  constructor() {
    this.scrollItems = $("section");
    this.headerLinks = $(".scroll a children");
    this.createSectionWaypoints();
  }

  createSectionWaypoints() {
    var self = this;
    this.scrollItems.each(function() {
      
      var currentSection = this;
      new Waypoint({
        element: currentSection,
        handler: function(direction) {
          if (direction == "down") {
            var matchingHeaderLink = currentSection.getAttribute("data-matching-link");
            self.headerLinks.removeClass("scroll-item--orange");
            $(matchingHeaderLink).addClass("scroll-item--orange");
          }
        }
      });

      new Waypoint({
        element: currentSection,
        handler: function(direction) {
          if (direction == "up") {
            var matchingHeaderLink = currentSection.getAttribute("data-matching-link");
            self.headerLinks.removeClass("scroll-item--orange");
            $(matchingHeaderLink).addClass("scroll-item--orange");
          }
        }
      });
    });
  }

}
*/

export default DottedPage;

