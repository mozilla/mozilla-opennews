---
layout: post
title: OpenNews Updates
section: blog
sub-section: index
permalink: /blog/
---

<p class="bodybig">Over the course of the year, we post event announcements, Knight-Mozilla fellowship information, calls for code convening and conference session proposals, and lots more. Keep up by <a href="http://planet.mozillaopennews.org/rss20.xml">grabbing our feed</a>, <a href="https://twitter.com/opennews">following us on Twitter</a>, or <a href="https://lists.mozilla.org/listinfo/community-mojo">joining our notifications list</a>. Or, you know, all of the above.</p>

<ul class = "bloglist">
  {% for post in site.posts %}
    <li>
      <p class="blogtitle"><a href="{{ post.url }}">{{ post.title }}</a><span class="blogdate">| posted <abbr class="timeago" title="{{ post.date }}">{{ post.date }}</abbr></span></>
      <p class="excerpt">{{ post.excerpt }}&nbsp;<a href="{{ post.url }}">read more</a>
    </li>
  {% endfor %}
</ul>
