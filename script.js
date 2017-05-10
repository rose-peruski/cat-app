var mykey=config.MY_KEY;
var myDatabase = config.databaseURL;
var myStorage = config.storageBucket;



$(document).ready(function(){
	$('#more').click(function() {
		//move to next kitty
		window.location='index.html';
		
	});
	
	$('#userCat').hide()
	$('#english-trans').hide();
	$('#finish-add').hide();
	$('#add').click(function() {
		//open up add functions
		$('#userCat').show().keyup(function() {

                // env=$('input[name=otherAdd]').val();
                // console.log(env);
            });
		$('#english-trans').show().keyup(function() {
                // env=$('input[name=otherAdd]').val();
                // console.log(env);
            });
		$('#finish-add').show()
	})

	// Get a reference to the database service

	
});


