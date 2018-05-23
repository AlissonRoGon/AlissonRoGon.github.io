// var isPlaying = false;

// window.onload = function(){
// 	document.getElementById("audio").play()
// }

// document.getElementById('disc').addEventListener("click",function(){
	
// 	isPlaying = !isPlaying
// 	let audio = document.getElementById("audio")
// 	if (isPlaying){
// 		document.getElementById('disc').classList.add("rotating")
// 		audio.play()
// 	}	
// 	else {
// 		document.getElementById('disc').classList.remove("rotating")
// 		audio.pause()
// 	}
// })


$('.navbar a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 100
	}, 500);
});


