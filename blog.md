---
layout: post
title: OpenNews Blog
permalink: /blog/
---
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a> | posted <abbr class="timeago" title="{{ post.date }}">{{ post.date }}</abbr>
    </li>
  {% endfor %}
</ul>
