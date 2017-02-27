
var App = (function () {

	function init() {
		setupPostAnchor();
	}

	function setupPostAnchor() {
		var link = null;
		var anchor = null;
		var $el = null;
		$('h2,h3,h4,h5', '.post').each(function (i, el) {
			$el = $(el);
			link = $el.attr('id');
			if (!link) {
				return;
			}

			anchor = document.createElement('a');
			anchor.href = '#' + link;
			anchor.className = "anchor";
			anchor.innerHTML = '<span></span>';

			$el.append(anchor);
		});
	}

	return {
		init,
	}

}).call(this);



$(document).ready(function () {
	App.init();
});


