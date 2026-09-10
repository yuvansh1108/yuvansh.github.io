---
layout: default
title: "Gallery"
permalink: /gallery/
---

<div class="card">
  <div class="section-header">
    <h2>Gallery</h2>
    <span>Photos and videos from my adventures.</span>
  </div>
  <p style="font-size:13px; color:var(--text-muted);">
    This is where I keep my favourite pictures and video moments – school, home, trips, experiments, and random fun.
  </p>
</div>

<div class="gallery-grid">
  {% assign photos = "yuvansh.infopng1.png|yuvansh.infopng2.png|yuvansh.infopng3.png|yuvansh.infopng4.png|yuvansh.infopng5.png" | split: "|" %}
  {% for photo in photos %}
    <div class="gallery-card">
      <div class="gallery-thumb">
        <img src="{{ '/assets/gallery/' | append: photo | relative_url }}" alt="Gallery photo {{ forloop.index }}" loading="lazy">
      </div>
      <div class="gallery-label">
        <div class="gallery-label-title">Photo {{ forloop.index }}</div>
        <div class="gallery-label-meta">📷 Photo</div>
      </div>
    </div>
  {% endfor %}
</div>
