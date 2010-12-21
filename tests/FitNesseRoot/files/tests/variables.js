function fv_variables(url) {

	var vars = {};
	var nums = 1;
	
	function getVars(url) {
	
		nums += 1;	
		
		$.get( url, function (res) {
			
			nums -= 1;
			
			var m = jQuery( res ).find( '#pageContentId' ).text().match(  /^!define [\w\.]+ +[(|\[|{][\s\S]*?[)|\]|}]/gm );		
			
			m && $.each( m, function () {				
				
				var v = this.match( /^!define ([\w\.]+) +[(|\[|{]([\s\S]*?)[)|\]|}]/ );
				
				vars[ v[1] ] || (vars[ v[1] ] = []);
				vars[ v[1] ].push( { url: url, value: v[2] } );
								
			});
			
			if (nums === 1) {
				$( '#fv-found-variables' ).trigger( 'message', vars );
			}
			
		});
	}
	
	function walkUp(url) {
	
		var re = /\.\w*$/;
	
		if (! url.match( re ) ) {
			return;
		}
		
		getVars( url + '?edit' );
		url =  url.replace( re, '' );		
		
		walkUp( url );	
	}	

	walkUp( url );	

}