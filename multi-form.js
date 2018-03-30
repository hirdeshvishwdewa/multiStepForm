(function ( $ ) {
 
    $.fn.multiStepForm = function(args) {
        var form = this;
        var tabs = form.find('.tab');
        var steps = form.find('.step');
        steps.each(function(i, e){
          $(e).on('click', function(ev){
            form.navigateTo(i);
          });
        });
        form.navigateTo = function (index) {
          /*Mark the current section with the class 'current'*/
          // console.log(tabs);
          tabs.removeClass('current') .eq(index) .addClass('current');
          // Show only the navigation buttons that make sense for the current section:
          form.find('.previous').toggle(index > 0);
          atTheEnd = index >= tabs.length - 1;
          form.find('.next').toggle(!atTheEnd);
          // console.log('atTheEnd='+atTheEnd);
          form.find('button[type=submit]').toggle(atTheEnd);
          fixStepIndicator(curIndex());
          return form;
        }
        function curIndex() {
          // Return the current index by looking at which section has the class 'current'
          return tabs.index(tabs.filter('.current'));
        }
        function fixStepIndicator(n) {
          // console.log(steps);
          steps.each(function(i, e){
            i == n ? $(e).addClass('active') : $(e).removeClass('active');
          });
        }
        // Previous button is easy, just go back
        form.find('.previous').click(function() {
          form.navigateTo(curIndex() - 1);
        });

        // Next button goes forward iff current block validates
        form.find('.next').click(function() {
          form.navigateTo(curIndex() + 1);
        });
        form.find('button[type=submit]').on('click', function(e){
          args.callback;
          return form;
        });
        typeof args.defaultStep === 'number' ? form.navigateTo(args.defaultStep) : null;
        return form;
    };
 
}( jQuery ));