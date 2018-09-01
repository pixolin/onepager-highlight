jQuery( document ).ready( function( $ ) {
	// On Click
	$( 'a[href*="#"]' ).on( 'click', function( e ){
		const linktHref = this.href.split( '#' );
		const href = $( '#' + linktHref[1] );

		toggleClass( this );

		/*
		 * Smooth scroll animation
		 */
		$( 'html, body' ).animate( {
			scrollTop: $( href ).offset().top
		}, 'slow', 'linear' );
		e.preventDefault();
	} );

	// Scroll Animation
	$( function () {
		// Set our scroll state after dom ready
		$( window ).scroll();
	} );

	$( window ).scroll( function() {
		// Get the current vertical position of the scroll bar
		const position = $( this ).scrollTop();
		const offset = 150;

		$( '.current-menu-item a[href*="#"]' ).each( function () {
			const menuItem = this.href.split( '#' );
			const menuHref = '#' + menuItem[1];
			const target = $( menuHref ).offset().top;
			if ( position >= target - offset ) toggleClass( this );
		} );
	});

	/*
	 * Remove class .active from links,
	 * than reapply to clicked menu item
	 */
	function toggleClass( node ) {
		$( '.current-menu-item a[href*="#"]' ).removeClass( 'active' );
		$( node ).addClass( 'active' );
	}

} );
