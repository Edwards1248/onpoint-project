import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class DottedPage {
  constructor() {
    this.scrollItems = $(".scroll-item");
    this.createSectionWaypoints();
    this.addSmoothScrolling();
  }

  addSmoothScrolling() {
    this.scrollItems.smoothScroll();
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
            self.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "18%"
      });

      new Waypoint({
        element: currentSection,
        handler: function(direction) {
          if (direction == "up") {
            var matchingHeaderLink = currentSection.getAttribute("data-matching-link");
            self.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "-40%"
      });
    });
  }

}


export default DottedPage;

