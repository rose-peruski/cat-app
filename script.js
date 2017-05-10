var mykey=config.MY_KEY;
var myDatabase = config.databaseURL;
var myStorage = config.storageBucket;
var kittyWord;
var kittyTranslation;
var count = 10;
//work dangit
//workd!

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
			count++

				ref.push({
		      cat: kittyWord,
		      english: kittyTranslation,
		      num: count
		    })
		});
	})

	// Get a reference to the database service

	
});

function Cat(word, engTrans, num) {
	this.word=word;
	this.engTrans=engTrans;
	this.num=num;

}


