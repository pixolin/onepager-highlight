jQuery( document ).ready( function( $ ) {

	// currentmenulinks  = Links for menu entries with class .current-menu-item
	// menulinkstoanchor = Links to anchor in nav menu
	// linkstoanchor     = Links to anchor, anywhere on the page

	var currentmenulinks    = $( '.current-menu-item a[href*="#"]' ).length,
		menulinkstoanchor   = $( '.menu-item a[href*="#"]' ),
		linkstoanchor       = $( 'a[href*="#"]' ),
		header              = 230; // To do: pass variable from customizer settings

	// check, if menu has multiple links to anchors with class .current-menu-item
	// we only want one menu item to be highlighted
	if ( 0 < currentmenulinks ) {

		// Let only first menu element have CSS class .current-menu-item and .first-current
		$( '.current-menu-item' ).not( ':first-child' ).toggleClass( 'current-menu-item' );
	}


	// On click, softly scroll to anchor and toggle .current-menu-item
	linkstoanchor.on( 'click', function( event ) {
		var linktHref = this.href.split( '#' ),
			href      = $( '#' + linktHref[1]);

		if ( linktHref[1]) {
			$( 'html, body' ).animate({
				scrollTop: $( href ).offset().top - header
			}, 'slow' );
		} else {
			$( 'html, body' ).animate({
					scrollTop: 0
			}, 'slow' );
		}

		// Toggle class .current-menu-item
		$( '.menu-item' ).removeClass( 'current-menu-item' );
		$( this ).parent().addClass( 'current-menu-item' );

		event.preventDefault();
		return false;
	});


	$( window ).scroll( function() {

		menulinkstoanchor.each( function() {
			var linktHref = this.href.split( '#' );
			if ( linktHref[1].length ) {
				if ( $( window ).scrollTop() >= ( $( '#' + linktHref[1] ).offset().top - header - 1) ) {
					$( '.menu-item' ).removeClass( 'current-menu-item' );
					$( this ).parent().addClass( 'current-menu-item' );
				}
			}

		});
	});

});
