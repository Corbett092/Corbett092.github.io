---
layout: post
title: 让写作保持简单
date: 2026-10-24
excerpt: 选择 Markdown、Jekyll 和 GitHub Pages，让博客专注在文章与页面本身。
tags:
  - 网页
  - 写作
---

我想要的博客不需要复杂的应用框架。文章以 Markdown 保存，页面使用 HTML 和 CSS，Jekyll 负责把内容整理成静态网页。

这样的分工很直接：写作时专注于文字，调整外观时修改样式，发布时由 GitHub Actions 构建并部署到 GitHub Pages。

## 内容和样式分开

每篇文章都放在 `_posts/` 目录里，文件名使用日期和简短标题。文章开头的 Front Matter 提供标题、日期、摘要和标签，后面就是普通 Markdown 正文。

首页和页面布局保留在现有模板中。需要调整颜色和排版时，可以直接编辑 `assets/style.css`，不用把文章内容和样式混在一起。

## 先做好一件小事

我会先持续写文章、整理真实完成的项目，再逐步完善这个博客。页面会保持轻量，让每次更新都从清楚的文字和简单的样式开始。
