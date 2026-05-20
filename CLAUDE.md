# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Single-page static website for **Kasangga**, a fiscal and bureaucratic assistance service. Built with [Eleventy](https://www.11ty.dev/) (SSG) and Nunjucks templates.

## Commands

```zsh
npm start      # dev server with live reload → http://localhost:8080
npm run build  # static build → _site/
```

## Architecture

```
src/
├── _includes/
│   └── base.njk    # base layout: <head>, navbar, footer
├── assets/         # passthrough copy → _site/assets/
│   ├── kasangga.ico
│   └── style.css
├── index.njk       # home page (uses base.njk layout)
├── pages/          # future additional pages
└── posts/          # future blog posts (Markdown or Nunjucks)
```

Output is generated in `_site/` by Eleventy. Asset paths are absolute (`/assets/…`) since they resolve from the `_site/` root.

The page is divided into anchor-targeted sections (`#home`, `#servizi`, `#news`, `#contatti`) navigated by a fixed navbar. CSS custom properties in `:root` (`src/assets/style.css`) drive the entire color scheme.
