// snap.js nav pane

var navPane = new Snap({
	element: document.getElementById('snap-content-wrapper'),
	disable: 'right',
	slideIntent: 30,
	minDragDistance: 20,
	maxPosition: 150,
	minPosition: -205
});

//snap.js toggle button
$('.toggle-navigation').on('click', function() {
	if (navPane.state().state == 'left') {
		navPane.close();
	} else {
		navPane.open('left');
	}
	return false;
});

// only enable the snap.js nav pane if appropriate for browser width
var applyNavPane = function() {
	window.browserWidth = document.documentElement.clientWidth;

	if (browserWidth <= 720) {
		navPane.enable();
		$('.snap-drawers').removeClass('hidden')
	} else {
		navPane.disable();
		$('.snap-drawers').addClass('hidden')
	}
}
// initial page load
applyNavPane();

// dropdown for mobile fellowship page browsing
$("#fellowside select").change(function() {
  window.location = $(this).find("option:selected").val();
});

// new mozilla GA account
		var _gaq = _gaq || [];
		_gaq.push(['_setAccount', 'UA-35433268-15']);
		_gaq.push(['_setDomainName', 'opennews.org']);
		_gaq.push(['_trackPageview']);
		(function() {
			var ga = document.createElement('script'); ga.type = 'text/javascript';
			ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(ga, s);
		})();

// ross's feed loader
	google.load("feeds", "1");
	function initialize() {
		var feed_urls = $("a.feed_url");
		$.each(feed_urls, function() {
			var current = $(this),
				feed = new google.feeds.Feed(current.attr('href'));
			feed.setNumEntries(4);
			feed.load(function(result) {
				if (!result.error) {
					var feed_list = "<ul>";
					for (var i = 0; i < result.feed.entries.length; i++) {
						var entry = result.feed.entries[i],
							url = entry.link;
						feed_list += "<li><a href='" + url + "'>";
						/*
							Bugfix for https://github.com/mozilla/mozilla-opennews/issues/130
							------------------------------------------------------------------
							If you ever want to switch back to the original feed (because it contains)
							author names in the title, and that was kind nice then you can do.
							As things currently stand the simpler title and no author, as was already used for
							the source feed is as good as can be done; but you do at least gets links now :)
						*/
						if (url.indexOf('mozillaopennews') !== -1) {
							var chunks = entry.title.split(':'),
							name = chunks.shift();
							feed_list += chunks.toString() + "</a> by " + name.toString();
						} else {
							feed_list += entry.title + "</a>";
						}
						feed_list += "</li>";
					}
					feed_list += "</ul>";
					current.parent().before($(feed_list));
				}
			});
		});
	}
	google.setOnLoadCallback(initialize);
