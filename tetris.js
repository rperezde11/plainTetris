const SPEED = 1000; // speed in ms
const ELAPSED_TIME = 100; // time btw frames in ms
const BLOCK_SIZE_PX = 50;
const B_PIECE = ['blue',[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0]];

var numPieces = 0;

$(document).ready( function() {

	$(this).keyup( function() {
		createBlock(B_PIECE);
		setInterval(
			function() {
				$('.falling').animate({ top: "+=20" }, ELAPSED_TIME);
			}, SPEED
		);
	});

});

function createBlock( piece ) 
{
	numPieces += 1;

	$('#starting-point').after(" \
		<div \
			style='top:0px; left:175px; background:"+piece[0]+"; height:50px; width:50px;' \
			id='"+piece[0]+"_piece' \
			class='piece-wrapper falling'> \
		</div>")
}