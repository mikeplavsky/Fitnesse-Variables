function fv_ui() {

	$( 'body' ).append( '<div id="fv-found-variables" display="none">' );
	
	$( '#fv-found-variables' ).bind( 'message', function (ev,data) {	
		
		var vars = create_array(data);		
		
		if (!vars.length) {
			$(this).hide();
			return;						
		}		
		
		$(this).show();
		$(this).text( 'Variables(' + vars.length + ')' );
		
	});
	
}
