# Wone · 个人博客

这是一个基于 Markdown、Jekyll 和 GitHub Pages 的静态个人博客，样式由原生 HTML 和 CSS 提供。文章保存在 `_posts/`，GitHub Actions 负责构建和发布。

## 项目结构

- `_config.yml`：站点标题、说明、语言、时区和链接。
- `index.html`：首页介绍、文章列表和项目卡片。
- `about.md`：关于页面。
- `_layouts/`：文章和页面的 HTML 布局。
- `_posts/`：博客文章。
- `assets/style.css`：颜色、排版和响应式样式。
- `src/plasma.jsx` 与 `package.json`：首页头像的 Plasma UI 效果及其打包配置。
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

Jekyll 页面和 Markdown 文章仍由 GitHub Pages 构建。GitHub Actions 会使用 Node.js 22 与 npm 安装固定版本的 Plasma UI、React 和 esbuild，仅将首页头像效果打包为本地 `assets/plasma-ui.js`；不从外部 CDN 加载资源。该构建只在 GitHub Actions 云端运行，本地写文章和改 HTML/CSS 无需安装 Node.js 或 npm。`node_modules/` 和生成的 bundle 不提交到仓库。
