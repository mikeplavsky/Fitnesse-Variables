function fv_ui() {

	$( 'body' ).append( '<div id="fv-found-variables" display="none">' );
    
    $( '#fv-found-variables' ).bind( 'message', function (ev,data) {	
		
		var vars = create_array(data).sort();		
		
		if (!vars.length) {
			$(this).hide();
			return;						
		}		
		
		$(this).show();
		$(this).text( 'Variables(' + vars.length + ')' );
        
        $( '#fv-found-variables' ).click( function () {       
            
            $('#fv-variables-dlg').remove();       
            $( 'body' ).append( $('<div id="fv-variables-dlg">').hide() );
       
            $( '#fv-variables-dlg' ).append( $( fitnesse.variables.main( {variables: vars, data: data} )) );	        
            $( '#fv-variables-dlg' ).append( $('<div id="fv-variables-hide">Close</div>'));        
       
            $( '#fv-variables-hide' ).click( function() {        
                $( '#fv-variables-dlg' ).hide();
            });
            
            $( '#fv-variables-dlg' ).show();
       
        });   
        
	});
}
