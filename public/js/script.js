// GLOBAL VARIABLES
var anchor = document.getElementById('anchor');
var images = [];

$.ajax({
	url:
		'https://www.googleapis.com/blogger/v3/blogs/7173052990851751381/posts?key=AIzaSyCVP8k3QIFSae1p2uXHPlDaBYZf_pFtQhw',
	dataType: 'json',
	type: 'GET',
	success: function(data) {
		firstPage = data;
		getImg(data);
		console.log(data);
		for (var i = 0; i < images.length; i++) {
			var imgContainer = document.createElement('div');
			imgContainer.setAttribute('class', 'item');
			imgContainer.innerHTML =
				'<img class="image"><div class="itemText"><a class="itemTitle"></a></div>';
			anchor.after(imgContainer);
			writeData(data, i);
		}
	},
	error: function(error) {
		console.log('Error');
		console.log(error);
	}
});

// get first image from each post
function getImg(firstPage) {
	var src = /src="(https|http|ftp):\/\/([\w-]+(?:(?:\.[\w-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?"/;

	for (var i = 0; i < firstPage.items.length; i++) {
		var find = firstPage.items[i].content.match(src);
		var url = find[0].substr(4);
		images.push(url);
	}

	console.log(images);
}

function writeData(data, arrayNo) {
	document.getElementsByClassName('image')[0].style.backgroundImage =
		'url(' + images[arrayNo] + ')';
	document.getElementsByClassName('itemTitle')[0].textContent =
		data.items[arrayNo].title;
	document
		.getElementsByClassName('itemTitle')[0]
		.setAttribute('href', data.items[arrayNo].url);
}
