module( 'fitnesse viewer variables' );

test( 'number of variables', function () {

    stop();
	
	$( 'body' ).append('<div id=fv-found-variables>').bind( 'message', function (event,data) { 	
	
		var length = 0;
		$.each( data, function () { length += 1; } )
		
		same( length, 7, 'number of variables' );
		
		same( data.TwiceVar.length, 3, 'variable defined several times on the page' ); 
		same( data.OverrideThisPort.length, 2, 'variable defined twice' );

		same( data.SimpleVar[0].value, '12456789' , 'variable defined on the page' );
		same( data.ComplexDefine[0].value, '${SimpleVar}890${OverrideThisPort}', 'complex variables' );
		
		for ( var i in data.OverrideThisPort ) {
			
			if ( data.OverrideThisPort[i].url.match( /SoN\?edit$/ ) ) {
				same( data.OverrideThisPort[i].value, '333', 'overriden varaible' );
			}
			else {
				same( data.OverrideThisPort[i].value, '80', 'original varaible' );
			}
		}
		
		start();
	});
	
	fv_variables( location.origin + '/FvVariablesTests.GrandPa.DaD.SoN' );	
	
});
