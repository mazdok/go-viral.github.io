/* CUSTOM JS
----------------------------------------------------------------------------------------

01. Initialize Bootstrap Matherial Design    

02. Select menu item on scroll   

03. Select menu item on scroll       
 
04. Scroll to menu link  

05. Magnific Popup js   

-------------------------------------------------------------------------------------- */

$(function () {

	/*-------------------------------------------------------------------------*
     *                  01. Initialize Bootstrap Matherial Design              *
     *-------------------------------------------------------------------------*/

	$('body').bootstrapMaterialDesign();

	/*-------------------------------------------------------------------------*
     *                  02. Animated menu toggler                              *
     *-------------------------------------------------------------------------*/
	let action = 310;
	let opac = 1;
	$('.navbar-toggler').click(function () {
		$(".navbar-links").animate({
			"top": action + "px",
			"opacity": opac
		}, "slow");

		action = (action == 310) ? -310 : 310;
		opac = (opac) ? 0 : 1;
	})

	$('#nav-icon').click(function () {
		$(this).toggleClass('open');
	});

	/*-------------------------------------------------------------------------*
     *                  03. Select menu item on scroll                         *
     *-------------------------------------------------------------------------*/

	const s = $('.waypoint');
	const nav = $('.navbar-item__link');
	s.waypoint({
		handler: function (direction) {
			let active = $(this);
			const currentSection = active.get(0).element.getAttribute('id');
			// if (direction == 'up') {
			// 	active = active.prev();
			// }
			const active_link = $('.navbar-item a[href="#' + currentSection + '"]');

			nav.parent().removeClass('active');
			active_link.parent().addClass('active');
		}
	});

	/*-------------------------------------------------------------------------*
     *                  04. Scroll to menu link                                *
     *-------------------------------------------------------------------------*/
	$(".navbar-item__link").click(function (e) {
		e.preventDefault()
		const $this = $(this);
		const path = $this.attr('href');

		if (!path) {
			return
		};

		setTimeout(function () {
			$(".navbar-item").each(function (index, item) {
				item.classList.remove('active');
			})
			$this.parent().addClass('active');
		}, 700)

		$([document.documentElement, document.body]).animate({
			scrollTop: $(path).offset().top
		}, 700);
	});

	/*-------------------------------------------------------------------------*
     *                  05. Magnific Popup js                                  *
     *-------------------------------------------------------------------------*/

    $('.popup-vimeo').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});
