/**
 * Theme functions file
 *
 * Contains handlers for navigation, accessibility, header sizing
 * footer widgets and Featured Content slider
 *
 */

(function($) {

	//function functionToCall() {
	//	if ($(window).width() > 767) {
	//		$('.section.page').removeAttr('id');
	//		$('#fullpage').fullpage({
	//			sectionsColor: ['#504998', '#06d5b0', '#504998', '#06d5b0'],
	//			menu: '.menu',
	//			css3: true
	//		});
	//	}else {
	//		$('.item').click(function(){
	//			$('html, body').animate({
	//				scrollTop: $( $(this).attr('href') ).offset().top
	//			}, 500);
	//			return false;
	//		});
	//	}
	//}
    //
	//$(window).load(function() {
	//	functionToCall()
	//});

	$(window).resize(function() {
		//functionToCall()
	});

	var Navigation = function () {
		this.nav = $('.navigation');
		this.overlay = $('.overlay');
		this.btn = $('.navbar-toggle-bg');
	};

	Navigation.prototype = function () {
		var options = {
				animationIn: 'fadeInDown',
				animationOut: 'fadeInRight'
			},

			showNav = function () {
				var self = this;

				this.nav.addClass('active');
				this.nav.removeClass('fadeInUp').addClass('fadeInDown');

				this.overlay.addClass('show');
				this.btn.addClass('open');
			},

			hideNav = function () {
				var self = this;
				this.nav.removeClass('active');
				this.overlay.removeClass('show');
				this.btn.removeClass('open');
				//$(this.nav).removeClass(this.options.animationIn).addClass(this.options.animationOut);
				this.nav.removeClass('fadeInDown').addClass('fadeInUp');
			},

			init = function () {

				var self = this;
				this.btn.click(function () {
					if (self.overlay.is(':visible')) {
						self.hideNav();
					} else {
						self.showNav();
					}
					return false;
				});

				//hide nav on overlay click
				this.overlay.click(function () {
					self.hideNav();
				});
				this.nav.click(function () {
					self.hideNav();
				});
			};

		return {
			options: options,
			init: init,
			showNav: showNav,
			hideNav: hideNav
		};
	}();

	nav = new Navigation();
	nav.init();

})(jQuery);
