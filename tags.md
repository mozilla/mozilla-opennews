---
layout: post
title: OpenNews Blog Tags
permalink: /blog/tags/index.html
---

{% capture tags %}
  {% for tag in site.tags %}
    {{ tag[0] }}
  {% endfor %}
{% endcapture %}
{% assign sortedtags = tags | split:' ' | sort %}

{% for tag in sortedtags %}
  <h3 id="{{ tag }}"><a href="{{ tag }}">{{ tag }}</a></h3>
  <ul>
  {% for post in site.tags[tag] %}
  <li><a href="{{ post.url }}">{{ post.title }}</a> | posted <abbr class="timeago" title="{{ post.date }}">{{ post.date }}</abbr></li>
  {% endfor %}
  </ul>
{% endfor %}
