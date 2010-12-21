module( 'fitnesse viewer variables', {
});

test( 'number of variables', function () {

    stop();
	
	$( 'body' ).append('<div id=fv-found-variables>').bind( 'message', function (event,data) { 	
		
		var length = 0;
		$.each( data, function () { length += 1; } )
		
		same( length, 4, 'number of variables' );
		ok( 'SimpleVar'in data, 'simple variable defined on the page' );
		ok( 'OverrideThisPort' in data, 'parent variable' );
		same( data.OverrideThisPort.length, 2, 'parent variable defined twice' );
		same( data.ComplexDefine[0].value, '', 'complex variables' );		
		
		start();
	});
	
	fv_variables( 'http://127.0.0.1/FvVariablesTests.GrandPa.DaD.SoN' );
	

	
});