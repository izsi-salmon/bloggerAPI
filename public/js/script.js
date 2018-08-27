var firstPage;

$.ajax({
	url:
		'https://www.googleapis.com/blogger/v3/blogs/7173052990851751381/posts?key=AIzaSyCVP8k3QIFSae1p2uXHPlDaBYZf_pFtQhw',
	dataType: 'json',
	type: 'GET',
	success: function(data) {
		firstPage = data;
		getImg();
	},
	error: function(error) {
		console.log('Error');
		console.log(error);
	}
});

function getImg() {
	var images = [];
	var src = /^src="(https|http|ftp):\/\/([\w-]+(?:(?:\.[\w-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?"$/;
	// console.log(firstPage.items[0].content);

	for (var i = 0; i < firstPage.items.length; i++) {
		// var img;
		var find = firstPage.items[i].content.match(src);
		console.log(find);
		// console.log(firstPage.items[i].content);
	}
}

// var str = 'For more information, see Chapter 3.4.5.1';
// var re = /see (chapter \d+(\.\d)*)/i;
// var found = str.match(re);
