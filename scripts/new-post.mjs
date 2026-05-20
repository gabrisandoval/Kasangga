#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const postsDir  = path.join(__dirname, "../src/posts");

function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

const title = process.argv[2] ?? "nuovo-post";
const slug  = slugify(title);
const date  = new Date().toISOString().split("T")[0];
const filepath = path.join(postsDir, `${slug}.md`);

if (fs.existsSync(filepath)) {
  console.error(`Il file "${slug}.md" esiste gia.`);
  process.exit(1);
}

const template = `---
layout: post.njk
title: ${title}
date: ${date}
tag: Fisco
description:
latest: true
---

<!-- Scrivi qui il contenuto del post -->
`;

fs.writeFileSync(filepath, template);
console.log(`Post creato: src/posts/${slug}.md`);
