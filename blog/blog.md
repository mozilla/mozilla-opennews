---
layout: post
title: OpenNews Blog
permalink: /blog/
---
<ul class = "bloglist">
  {% for post in site.posts %}
    <li>
      <p class="blogtitle"><a href="{{ post.url }}">{{ post.title }}</a><span class="blogdate">| posted <abbr class="timeago" title="{{ post.date }}">{{ post.date }}</abbr></span></>
      <p class="excerpt">{{ post.excerpt }}&nbsp;<a href="{{ post.url }}">read more</a>
    </li>
  {% endfor %}
</ul>
