# Wone · 个人博客

这是一个基于 Markdown、Jekyll 和 GitHub Pages 的静态个人博客，样式由原生 HTML 和 CSS 提供。文章保存在 `_posts/`，GitHub Actions 负责构建和发布。

## 项目结构

- `_config.yml`：站点标题、说明、语言、时区和链接。
- `index.html`：首页介绍、文章列表和项目卡片。
- `about.md`：关于页面。
- `_layouts/`：文章和页面的 HTML 布局。
- `_posts/`：博客文章。
- `assets/style.css`：颜色、排版和响应式样式。
- `.github/workflows/pages.yml`：GitHub Pages 构建与部署工作流。

## 新建文章

在 `_posts/` 中新增 `YYYY-MM-DD-title.md`，保留现有 Front Matter 格式：

```yaml
---
layout: post
title: 文章标题
date: 2026-10-24
excerpt: 一句话摘要
tags:
  - 学习
---
```

第二个 `---` 之后写 Markdown 正文。首页内容在 `index.html` 修改，个人介绍在 `about.md` 修改，配色和排版在 `assets/style.css` 修改。

## 发布

`.github/workflows/pages.yml` 在推送到 `main` 或手动触发时运行 Jekyll 构建并部署到 GitHub Pages。首次设置时，在 GitHub 仓库的 **Settings → Pages** 中将 Source 设为 **GitHub Actions**。之后每次推送到 `main` 都会触发发布。

构建在 GitHub Actions 云端执行。本项目不需要 Node.js、npm、前端框架、数据库或本地构建工具。
