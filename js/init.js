         $(document).ready(function() {
                   $('#myContainer').multiscroll({
                   	sectionsColor: ['#fafafa', '#B30838','#B30838','#B30838','#B30838','#633492', '#633492', '#633492', '#633492'],
                   	anchors: ['home', 'usl', 'teneleven', 'twelvethirteen', 'fourteen', 'mls', 'fifteen', 'sixteen', 'seventeen'],
                   	menu: '#menu',
                   	easing: 'easeOutBack',
         		navigation: true,
                   	loopBottom: true,
                   	loopTop: true
                   });
               });
               new WOW().init();
