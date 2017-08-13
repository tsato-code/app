$(function() {
	$('.add-star').click(function(){
		var $this = $(this);
		var post_id = $this.attr('data-post-id');
		// console.log(post_id);
		$.ajax({
			url: '/star?post_id=' + post_id,
			dataType: 'json',
			success: function(data) {
				// alert('スターを付けました！');
				// console.log(data['star_count']);
				$this.text(data['star_count']);
			},
			error: function(data) {
				alert('失敗しました↓');console.log("ajax通信に失敗しました");
				console.log("XMLHttpRequest : " + XMLHttpRequest.status);
				console.log("textStatus     : " + textStatus);
				console.log("errorThrown    : " + errorThrown.message);
			}
		})
	});
});
