
var images = ['images/food1.jpg', 'images/food2.jpg', 'images/food3.jpg', 
'images/food4.jpg', 'images/food5.jpg', 'images/food6.jpg', 'images/food7.jpg',
'images/food8.jpg'];
var votes = [];

var currentImageIndex = 0;


$('#btn-back').on('click', function(clickBack){
	clickBack.preventDefault();
	console.log('back clicked'); 
	if (currentImageIndex > 0){
		currentImageIndex--;
		$('#your-vote').val(votes[currentImageIndex]);
		$('#image-to-vote-on').attr('src', images[currentImageIndex]);
	} 

});

$('#your-vote').on('change', function(clickVote){
	clickVote.preventDefault();
	console.log('your vote has been counted');
	var selectedVote = $(this).val();
	console.log('selectedVote was: ' + selectedVote);
	votes[currentImageIndex] = selectedVote;
	console.log('the current votes are: ' + votes);
	currentImageIndex++;
	$('#image-to-vote-on').attr('src', images[currentImageIndex]);
	$(this).val('0');
	if (currentImageIndex == images.length){
		console.log('no more votes, heres the total')
		//display the total of the votes array
		document.getElementById('status').innerHTML = "<p>You have reached the end. Total deliciousness score was:" + votes /8;
	}
});

$('#btn-skip').on('click', function(clickSkip){
	clickSkip.preventDefault();
	console.log('skip clicked');
	if (currentImageIndex < images.length){
		votes[currentImageIndex] = 0;
		currentImageIndex++;
		$('#image-to-vote-on').attr('src', images[currentImageIndex]);
	} 
});

