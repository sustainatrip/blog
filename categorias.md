---
layout: default
title: Categorias
permalink: /categorias/
---

# Categorias

{% assign categorias = site.categories | sort %}

{% for categoria in categorias %}

## {{ categoria[0] }}

{% for post in categoria[1] %}

- [{{ post.title }}]({{ post.url | relative_url }})

{% endfor %}

{% endfor %}