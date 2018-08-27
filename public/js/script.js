$.ajax({
	url:
		'https://www.googleapis.com/blogger/v3/blogs/7173052990851751381/posts?key=AIzaSyCVP8k3QIFSae1p2uXHPlDaBYZf_pFtQhw',
	dataType: 'json',
	type: 'GET',
	success: function(data) {
		firstPage = data;
		getImg(data);
	},
	error: function(error) {
		console.log('Error');
		console.log(error);
	}
});

// get first image from each post
function getImg(firstPage) {
	var images = [];
	var src = /src="(https|http|ftp):\/\/([\w-]+(?:(?:\.[\w-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?"/;

	for (var i = 0; i < firstPage.items.length; i++) {
		var find = firstPage.items[i].content.match(src);
		images.push(find[0]);
	}

	console.log(images);
}
