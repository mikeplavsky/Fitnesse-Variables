if ( $( 'link' ).filter( function() { return $(this).attr( 'href' ).match( 'fitnesse' )  } ).length && !$( '#test-summary' ).length ) {
	
	fv_ui();
	fv_variables( window.location.href );
	
}


