if ( $( 'link' ).filter( function() { return $(this).attr( 'href' ).match( 'fitnesse' )  } ).length && !$( '#test-summary' ).length ) {

	function log(msg) {
		console.log( 'Vars: ' + msg );
	}

	log( 'Started' );	
	
	$( 'body' ).ajaxError( function() {		
		log( 'Error.' );
	});
	
	var vars = {};
	var nums = 1;
	
	function getVars(url) {
	
		nums += 1;	
		
		$.get( url, function (res) {
			
			nums -= 1;
			log( 'Done:' + nums );
			
			var m = jQuery( res ).find( '#pageContentId' ).text().match(  /^!define [\w\.]+ +[(|\[|{].*[)|\]|}]/gm );		
			
			m && $.each( m, function () {				
				
				var v = this.match( /^!define ([\w\.]+) +[(|\[|{](.*)[)|\]|}]/ );
				
				vars[ v[1] ] || (vars[ v[1] ] = []);
				vars[ v[1] ].push( { url: url, value: v[2] } );
								
			});
			
			if (nums === 1) {
				console.dir( vars ); 			
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

	walkUp( location.href );	
	
};




