#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const serviziDir = path.join(__dirname, "../src/servizi");

function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

const title = process.argv[2] ?? "nuovo-servizio";
const slug  = slugify(title);
const filepath = path.join(serviziDir, `${slug}.md`);

if (fs.existsSync(filepath)) {
  console.error(`Il file "${slug}.md" esiste già.`);
  process.exit(1);
}

const template = `---
layout: servizio.njk
title: ${title}
permalink: /servizi/${slug}.html
categoria: Fisco / Dichiarazioni
subtitle: Descrizione breve del servizio.
cta: Hai bisogno di assistenza? Contattaci per un appuntamento.
sezioni:
  - titolo: Prima sezione
    voci:
      - Voce 1
      - Voce 2
---
`;

fs.writeFileSync(filepath, template);
console.log(`Servizio creato: src/servizi/${slug}.md`);
