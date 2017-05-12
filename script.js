var mykey=config.MY_KEY;
var myDatabase = config.databaseURL;
var myStorage = config.storageBucket;
var kittyWord;
var kittyTranslation;
var count = 12;
//work dangit
//workd!
var getCount = function() {
	var lastRef = firebase.database().ref('translations/').limitToLast(1);
	lastRef.orderByChild("num").on("child_added", function(data) {
   	console.log(parseInt(data.val().num));
	});
}	
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
		count++;
		$('#userCat').show().keyup(function() {
			kittyWord=$('#userCat').val();
			console.log(kittyWord);
            });
		$('#english-trans').show().keyup(function() {
               kittyTranslation=$('#english-trans').val();
			console.log(kittyTranslation);
            });
		$('#finish-add').show().click(function() {

			catCreate = new Cat(kittyWord, kittyTranslation, count);
			console.log(catCreate);
			stringCount = count.toString();
			count++

				ref.push({
		      cat: kittyWord,
		      english: kittyTranslation,
		      num: stringCount
		    })
			$('#userCat').hide()
			$('#english-trans').hide();
			$('#finish-add').hide();


			$('#kitty-user').append("<p>Thanks for adding! We will review</p>"); 	
		});
	})

	// Get a reference to the database service

	
});

function Cat(word, engTrans, num) {
	this.word=word;
	this.engTrans=engTrans;
	this.num=num;

}


