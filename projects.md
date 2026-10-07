---
layout: default
title: "Projects"
permalink: /projects/
---

<div class="card">
  <h2>Projects</h2>
  <p>Things I built: games, drawings, LEGO stuff, experiments.</p>
</div>
<div style="width:100%;height:700px;" data-zite-id="jukvgi31xw" data-zite-embed-type="standard" data-zite-inherit-parameters></div><script src="https://server.zite.com/embed/v2-zite/"></script>
<h2>Chatty Pi</h2>
<p>This is my chat app I created.</p>

{% assign items = site.posts | where: "category", "projects" | sort: "date" | reverse %}
{% for post in items %}
  <a class="post-link" href="{{ post.url | relative_url }}">
    <div class="card">
      <h3>{{ post.title }}</h3>
      <div class="meta">{{ post.date | date: "%B %d, %Y" }}</div>
      <p>{{ post.excerpt | strip_html | truncate: 120 }}</p>
    </div>
  </a>
{% endfor %}
