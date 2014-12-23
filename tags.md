---
layout: post
title: OpenNews Blog Tags
permalink: /blog/tags.html
---

{% capture tags %}
  {% for tag in site.tags %}
    {{ tag[0] }}
  {% endfor %}
{% endcapture %}
{% assign sortedtags = tags | split:' ' | sort %}

{% for tag in sortedtags %}
  <h3 id="{{ tag }}"><a href="/tag/{{ tag }}">{{ tag }}</a></h3>
  <ul>
  {% for page in site.tags[tag] %}
    <li><a href="{{ page.url }}">{{ page.title }}</a></li>
  {% endfor %}
  </ul>
{% endfor %}
