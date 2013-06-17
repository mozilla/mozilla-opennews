---
layout: post
title: OpenNews Blog
section: blog
---
<p class="bodybig">The latest new about journalism innovation and the OpenNews project from the OpenNews team and Knight-Mozilla Fellows. Follow all our posts on the <a href="http://planet.mozillaopennews.org/rss20.xml">OpenNews feed</a> or <a href="http://www.twitter.com/opennews">@opennews</a>.

<div id="rss-feeds"></div>
<div id="feed">Read more by <a href="http://planet.mozillaopennews.org/rss20.xml">subscribing to the OpenNews feed</a></div>


<script type="text/javascript" src="media/js/jquery.rss.js"></script>
<script src="https://raw.github.com/timrwood/moment/1.7.2/min/moment.min.js"></script>

<script>
  $(function($) {
	$("#rss-feeds").rss("http://planet.mozillaopennews.org/rss20.xml", {
	  limit: 10,
	  tokens: {
	  	prettyDate: function(entry, tokens) {
	  	  return moment(tokens.date).format("dddd, MMM DD YYYY")
	  		}
	  	},
	  entryTemplate: '<li class="blogentry"><p class="date">{prettyDate}</p><h1><a href="{url}">{title}</a></h1><p>{body}</li>',
	})
  })
</script>
