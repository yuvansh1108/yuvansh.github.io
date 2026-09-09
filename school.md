---
layout: default
title: "What I Learned at School"
permalink: /school/
---

<style>
  .school-intro {
    margin-bottom: 22px;
  }

  .school-today {
    border-color: rgba(34, 197, 94, 0.55) !important;
    margin-bottom: 24px;
  }

  .previous-posts-box {
    margin: 24px 0;
    padding: 20px;
    border: 1px solid rgba(56, 189, 248, 0.28);
    border-radius: 18px;
    background: rgba(2, 6, 23, 0.35);
  }

  .previous-posts-box h3 {
    margin-top: 0;
  }

  .previous-posts-select {
    width: 100%;
    padding: 12px 14px;
    border-radius: 12px;
    border: 1px solid rgba(56, 189, 248, 0.35);
    background: #071a2b;
    color: #eff6ff;
    font: inherit;
    cursor: pointer;
  }

  .previous-posts-select:focus {
    outline: 2px solid rgba(34, 197, 94, 0.55);
    outline-offset: 2px;
  }

  .previous-posts-button {
    display: inline-block;
    margin-top: 12px;
    padding: 10px 16px;
    border-radius: 999px;
    background: linear-gradient(90deg, #38bdf8, #22c55e);
    color: #04111d !important;
    text-decoration: none;
    font-weight: 800;
    cursor: pointer;
    border: none;
  }

  .previous-posts-button:hover {
    color: #04111d !important;
    transform: translateY(-1px);
  }

  .previous-posts-empty {
    color: #a7c0da;
    margin: 8px 0 0;
  }
</style>

<div class="school-intro">
  <h1>What I Learned at School</h1>
  <p>Things I understood or discovered in school.</p>
</div>

<div class="card school-today">
  <h3>📅 Today — September 9, 2026</h3>
  <p><strong>School Holiday</strong></p>
  <p>Today was a holiday, so I did not go to school.</p>
</div>

<div class="previous-posts-box">
  <h3>📚 Previous School Posts</h3>
  <p>Choose a previous school post to open it.</p>

  <select id="previous-school-post" class="previous-posts-select" aria-label="Choose a previous school post">
    <option value="">Choose a post…</option>
    {% assign items = site.posts | where: "category", "school" | sort: "date" | reverse %}
    {% for post in items %}
      <option value="{{ post.url | relative_url }}">
        {{ post.title }} — {{ post.date | date: "%B %d, %Y" }}
      </option>
    {% endfor %}
  </select>

  <button id="open-school-post" class="previous-posts-button" type="button">
    Open selected post →
  </button>
</div>

<div id="school-post-list">
  {% assign items = site.posts | where: "category", "school" | sort: "date" | reverse %}
  {% for post in items %}
    <a class="post-link" href="{{ post.url | relative_url }}">
      <div class="card">
        <h3>{{ post.title }}</h3>
        <div class="meta">{{ post.date | date: "%B %d, %Y" }}</div>
        <p>{{ post.excerpt | strip_html | truncate: 120 }}</p>
      </div>
    </a>
  {% endfor %}
</div>

<script>
  const postSelect = document.getElementById('previous-school-post');
  const openPostButton = document.getElementById('open-school-post');

  openPostButton.addEventListener('click', function () {
    const url = postSelect.value;
    if (url) {
      window.location.href = url;
    } else {
      postSelect.focus();
    }
  });
</script>
