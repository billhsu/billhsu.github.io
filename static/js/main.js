(function() {
  $(function() {
    var centerElements;
    centerElements = function() {
      var $el, el, elHeight, i, len, ref, results, windowHeight;
      windowHeight = window.innerHeight;
      ref = $('.js-vertical-center');
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        el = ref[i];
        $el = $(el);
        elHeight = $el.innerHeight();
        if (elHeight < windowHeight) {
          results.push($el.css({
            top: ((windowHeight - elHeight) / 2) + "px"
          }));
        } else {
          results.push($el.css({
            top: 0
          }));
        }
      }
      return results;
    };
    centerElements();
    return $(window).on('resize', centerElements);
  });

}).call(this);
