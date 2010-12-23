module( 'fitnesse viewer variables', {
});

test( 'number of variables', function () {

    stop();
	
	$( 'body' ).append('<div id=fv-found-variables>').bind( 'message', function (event,data) { 	
		
		var length = 0;
		$.each( data, function () { length += 1; } )
		
		same( length, 7, 'number of variables' );

		same( data.SimpleVar[0].value, '12456789' , 'variable defined on the page' );

		same( data.TwiceVar.length, 3, 'variable defined several times on the page' ); 
		
		same( data.OverrideThisPort[0].value , '100',  'overriden variable' );
        	same( data.OverrideThisPort.length, 2, 'variable defined twice' );
	
		same( data.ComplexDefine[0].value, '', 'complex variables' );		
	

	
		start();
	});
	
	fv_variables( location.origin + '/FvVariablesTests.GrandPa.DaD.SoN' );
	
});
